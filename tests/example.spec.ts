import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Truy cập trang https://fnb.kiotviet.vn/
  await page.goto('https://fnb.kiotviet.vn/');

  // Kiểm tra Title contains text 'Đăng nhập'
  await expect(page).toHaveTitle(/Đăng nhập/);
});

test('forgot password link', async ({ page }) => {
  // Truy cập trang https://fnb.kiotviet.vn/
  await page.goto('https://fnb.kiotviet.vn/');

  // Click vào link "Quên mật khẩu"
  await page.getByRole('link', { name: 'Quên mật khẩu' }).click();

  // Kiểm tra heading có nội dung "Quên mật khẩu"
  await expect(page.getByRole('heading', { name: 'Quên mật khẩu' })).toBeVisible();
});