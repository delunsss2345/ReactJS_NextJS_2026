export const recipeCollections = {
  summer: [
    {
      slug: 'italian-style-tomato-salad',
      title: 'Italian-style tomato salad',
      image: '/image/italian_style_tomato.png',
      time: '12 minutes',
    },
    {
      slug: 'spaghetti-with-vegetables-and-shrimp',
      title: 'Spaghetti with vegetables and shrimp',
      image: '/image/vegetable_and_shrimp_spaghetti.png',
      time: '15 minutes',
    },
    {
      slug: 'lotus-delight-salad',
      title: 'Lotus delight salad',
      image: '/image/lotus_delight_salad.png',
      time: '20 minutes',
    },
    {
      slug: 'snack-cakes',
      title: 'Snack cakes',
      image: '/image/snack_cakes.png',
      time: '21 minutes',
    },
  ],
  videos: [
    {
      slug: 'salad-with-cabbage-and-shrimp',
      title: 'Salad with cabbage and shrimp',
      image: '/image/salad_with_cabbage.png',
      time: '32 minutes',
    },
    {
      slug: 'salad-of-cove-beans-shrimp-and-potatoes',
      title: 'Salad of cove beans, shrimp and potatoes',
      image: '/image/bean_shrimp_and_potato_salad.png',
      time: '32 minutes',
    },
    {
      slug: 'sunny-side-up-fried-eggs',
      title: 'Sunny-side up fried eggs',
      image: '/image/sunny_side_up_fried_eggs.png',
      time: '32 minutes',
    },
    {
      slug: 'lotus-delight-salad-01',
      title: 'Lotus delight salad',
      image: '/image/lotus_delight_salad_01.png',
      time: '32 minutes',
    },
  ],
  recentlyViewed: [
    {
      slug: 'salad-with-cabbage-and-shrimp',
      title: 'Salad with cabbage and shrimp',
      image: '/image/salad_with_cabbage_and_shrimp.png',
      time: '32 minutes',
    },
    {
      slug: 'salad-of-cove-beans-shrimp-and-potatoes',
      title: 'Salad of cove beans, shrimp and potatoes',
      image: '/image/lotus_delight_salad_1.png',
      time: '32 minutes',
    },
    {
      slug: 'sunny-side-up-fried-eggs',
      title: 'Sunny-side up fried eggs',
      image: '/image/five_color_salad.png',
      time: '32 minutes',
    },
    {
      slug: 'lotus-delight-salad',
      title: 'Lotus delight salad',
      image: '/image/corn_salad.png',
      time: '32 minutes',
    },
  ],
}

export const primaryRecipe = {
  slug: 'strawberry-shortcake',
  title: 'How to make a Strawberry Shortcake',
  subtitle:
    "It seems like there may be a misunderstanding. If you're asking how a user can make a Strawberry Shortcake, the process would be identical to the recipe shared earlier. It involves preparing the strawberries, making the shortcakes, preparing whipped cream, and finally assembling the shortcake.",
}

export const findRecipeBySlug = (slug) => {
  if (slug === primaryRecipe.slug) {
    return primaryRecipe
  }

  const allCards = [
    ...recipeCollections.summer,
    ...recipeCollections.videos,
    ...recipeCollections.recentlyViewed,
  ]

  return allCards.find((item) => item.slug === slug) || null
}
