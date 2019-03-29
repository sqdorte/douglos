window.onload = () => {
  const imgs = [...document.getElementsByTagName('img')]
  const douglos = [
    '5mSHRK5', 'xu3xAY6', 'tiomAm9', 'XSrHlah',
    'Gt1AJCD', 'OzEBKjO', 'Abnwoag', 'NpllIWa',
    '0cyoNZt', 'LvsCBAZ', 'qfDeasc', 'qSTbiqX',
    'RoRHvon', 'GpcZbvC', 'QVA9SLo', 'SpJXDsp',
    'iK6TfFK', 'sg8z3Y9'
  ]

  const rand = xs => xs[Math.floor(Math.random() * xs.length)]

  imgs.forEach(img => {
    if (Math.random() >= 0.9)
      img.src = `https://i.imgur.com/${rand(douglos)}.png`
  })
}
