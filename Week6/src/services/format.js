export const formatCurrency = (
  value,
  { locale = 'vi-VN', currency = 'VND' } = {},
) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'VND' ? 0 : 2,
  }).format(value)
