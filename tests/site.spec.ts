import { expect, test } from "@playwright/test";

test("home renders every section without overflow or browser errors", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "We build digital systems",
  );
  for (const id of ["about", "work", "services", "approach"])
    await expect(page.locator(`#${id}`)).toBeVisible();
  await expect(
    page.getByRole("link", { name: /^View .* project$/ }),
  ).toHaveCount(5);
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
  await page.screenshot({
    path: `test-results/home-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test("project links resolve and unknown projects show a 404", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "View Abroad Eduversity project" })
    .click();
  await expect(page).toHaveURL(/\/work\/abroad-eduversity$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Abroad Eduversity",
  );
  await page.getByRole("link", { name: "All projects", exact: true }).click();
  await expect(page).toHaveURL(/\/#work$/);
  const response = await page.goto("/work/does-not-exist");
  expect(response?.status()).toBe(404);
});

test("service links preselect an enquiry and form validates required input", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: /Custom Software Development Tailored/ })
    .click();
  await expect(page.getByLabel("What would you like to build?")).toHaveValue(
    "Custom Software Development",
  );
  await page.getByRole("button", { name: "Create email enquiry" }).click();
  await expect(page.getByLabel("Your name")).toBeFocused();
  await page.getByLabel("Your name").fill("Test Person");
  await page.getByLabel("Email address").fill("test@example.com");
  await page
    .getByLabel("Tell us about your project")
    .fill("A new accessible website.");
  await page.getByRole("button", { name: "Create email enquiry" }).click();
  await expect(page.getByRole("status")).toContainText("Please send it there");
});

test("navigation works with keyboard and on mobile", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toHaveCount(0);
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Services" })
      .click();
    await expect(page).toHaveURL(/#services$/);
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toHaveCount(0);
  } else {
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Services" })
      .click();
    await expect(page).toHaveURL(/#services$/);
  }
});
