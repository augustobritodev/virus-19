export function formatNumber (num: number) {
  if (isNaN(num)) return 0
  return Intl.NumberFormat('pt-BR',
    { minimumFractionDigits: 0, maximumFractionDigits: 2 },
  ).format(num);
}

export function percent(num: number, total: number) {
  if (isNaN(num) || isNaN(total) || !num || !total) return 0
  const percent = (num / total)
  return Intl.NumberFormat('pt-BR', { 
    style: 'percent', 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(percent)
}