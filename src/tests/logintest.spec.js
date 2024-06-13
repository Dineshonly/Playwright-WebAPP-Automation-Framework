// @ts-check
import {test} from "@playwright/test";
import {performLogin} from "../utils/baseTestUtils.js";

test('[] Login to SNEDrive 2.0 @smoke-qa-default',async ({page}) => {
  // Perform the login operation first
  await performLogin(page);
  await page.waitForTimeout(9000);
})