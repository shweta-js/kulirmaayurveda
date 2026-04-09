const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const products = [
  {
    name: "Kulirma Burn Care Balm",
    slug: "kulirma-burn-care-balm",
    image: "/assets/images/product_image/burn_balm.png",
    price: 369,
    priceDisplay: "₹369",
    shortDescription: "Traditional Ayurvedic formulation designed to soothe burned or irritated skin and support natural skin recovery.",
    description: "Burn injuries can occur in everyday life due to heat, fire, boiling liquids, electricity, chemicals, sunlight, or radiation. Such incidents often cause pain, blisters, and skin irritation, requiring proper care and protection to support the healing process. Kulirma Burn Care Balm is a traditional Ayurvedic formulation developed to help soothe burned or irritated skin and support natural skin recovery. Since 1984, it has been used by many individuals seeking herbal skin care for burns and minor skin injuries.",
    ingredients: "Ayurvedic herbal extracts and medicinal oils used traditionally for burn treatment.",
    benefits: JSON.stringify([
      "Helps soothe and support recovery of affected skin",
      "Made using traditional Ayurvedic herbal ingredients",
      "Helps maintain a clean environment for skin care",
      "Suitable for minor burns and skin irritation",
      "Prepared following GMP standards"
    ]),
    usage: JSON.stringify([
      "Gently clean the affected area.",
      "Apply a sufficient amount of Kulirma Burn Care Balm.",
      "Cover lightly with clean cotton cloth if needed.",
      "Reapply the balm up to three times a day as required."
    ]),
    stock: 100,
    category: "Balm",
    prescriptionReq: false
  },
  {
    name: "Kulirma Revive Plus Nourish Restoration Oil",
    slug: "kulirma-revive-plus-oil",
    image: "/assets/images/product_image/revive_plus.png",
    price: 573,
    priceDisplay: "₹573",
    shortDescription: "Ayurvedic herbal oil formulated to nourish dry skin, support natural skin restoration, and promote a healthy, radiant appearance.",
    description: "Kulirma Revive Plus Nourish Restoration Oil is a traditional Ayurvedic herbal oil formulated to nourish and restore skin health. Inspired by Ayurvedic principles of natural healing, this oil is prepared using a blend of more than 41 carefully selected herbs.",
    ingredients: "Key ingredients include virgin coconut oil derived from coconut milk, pure local cow ghee, and traditional herbs such as sandalwood, red sandalwood, and devadaru.",
    benefits: JSON.stringify([
      "Helps nourish and moisturize dry skin",
      "Supports restoration of skin texture and appearance",
      "Helps improve overall skin radiance",
      "Helps reduce the appearance of blemishes and uneven skin tone",
      "Promotes smooth, soft, and hydrated skin"
    ]),
    usage: JSON.stringify(["Apply a small amount of oil to the skin and gently massage for about 30 minutes, or as required."]),
    stock: 100,
    category: "Oil",
    prescriptionReq: false
  },
  {
    name: "Kulirma Keshpushti Black Hair Oil",
    slug: "kulirma-keshpushti-hair-oil",
    image: "/assets/images/product_image/black_hairoil.png",
    price: 0, // Price NA
    priceDisplay: "Price on Request",
    shortDescription: "Ayurvedic herbal oil formulated to nourish the scalp, support healthy hair growth, and improve overall hair texture and shine.",
    description: "Kulirma Keshpushti Black Hair Oil is a traditional Ayurvedic herbal hair oil developed after years of dedicated research.",
    ingredients: "Neelajadadamudi, Neela Krikrita, Kamandalu, Nagalingapu and other Ayurvedic herbs.",
    benefits: JSON.stringify([
      "Helps nourish the scalp and strengthen hair roots",
      "Supports healthy hair growth",
      "Helps reduce hair fall and dandruff",
      "Promotes smooth, healthy-looking hair",
      "Helps maintain scalp comfort and overall hair health"
    ]),
    usage: JSON.stringify([
      "Apply a few drops of oil to the scalp",
      "Gently massage into the scalp before going to bed",
      "Leave overnight and wash the hair in the morning if required",
      "For best results, use regularly as part of your hair care routine"
    ]),
    stock: 100,
    category: "Hair Oil",
    prescriptionReq: false
  },
  {
    name: "Kulirma Amkushini Balm Anti-fungal Cream",
    slug: "kulirma-antifungal-balm",
    image: "/assets/images/product_image/antifungal_cream.png",
    price: 369,
    priceDisplay: "₹369",
    shortDescription: "Ayurvedic herbal balm formulated to help soothe skin irritation, itching, and fungal skin concerns.",
    description: "Kulirma Amkushini Balm is a traditional Ayurvedic herbal balm formulated to support skin health and help soothe various skin irritations.",
    ingredients: "Ayurvedic medicinal herbs used for fungal and skin infection treatments.",
    benefits: JSON.stringify([
      "Helps soothe itching and skin irritation",
      "Supports care for fungal skin concerns",
      "Helps relieve discomfort from insect bites and minor skin allergies",
      "Supports overall skin comfort and hygiene",
      "May help improve the appearance of dry or cracked skin areas"
    ]),
    usage: JSON.stringify([
      "Clean the affected area with warm water (salt water may be used if needed)",
      "Gently dry the skin",
      "Apply a small amount of the balm to the affected area",
      "Use 3–4 times a day or as required"
    ]),
    stock: 100,
    category: "Balm",
    prescriptionReq: false
  },
  {
    name: "Kulirma Piles Balm",
    slug: "kulirma-piles-balm",
    image: "/assets/images/product_image/piles_balm.png",
    price: 589,
    priceDisplay: "₹589",
    shortDescription: "Ayurvedic herbal balm formulated to help soothe discomfort associated with piles.",
    description: "Kulirma Piles Balm is a traditional Ayurvedic formulation designed to support comfort and care for individuals experiencing piles (hemorrhoids).",
    ingredients: "Traditional Ayurvedic herbs formulated to reduce inflammation and pain.",
    benefits: JSON.stringify([
      "Helps soothe irritation and discomfort associated with piles",
      "Supports relief from itching and inflammation",
      "Helps maintain comfort in the affected area",
      "Supports overall care for hemorrhoid-related discomfort"
    ]),
    usage: JSON.stringify([
      "Clean the affected area properly",
      "Apply a small amount of the balm to clean cotton",
      "Gently apply or place it on the affected area",
      "Use 3–4 times a day or as required"
    ]),
    stock: 100,
    category: "Balm",
    prescriptionReq: false
  },
  {
    name: "Kulirma Wound Balm",
    slug: "kulirma-wound-balm",
    image: "/assets/images/product_image/wound_balm.png",
    price: 369,
    priceDisplay: "₹369",
    shortDescription: "Ayurvedic herbal balm formulated to support natural wound care and promote healthy skin recovery.",
    description: "Kulirma Wound Balm is a traditional Ayurvedic formulation designed to support natural wound care and skin recovery.",
    ingredients: "Medicinal herbs, oils and spices known for antibacterial and healing properties.",
    benefits: JSON.stringify([
      "Helps soothe irritation and discomfort around wounds",
      "Supports natural skin recovery",
      "Helps maintain cleanliness and protection of the affected area",
      "Supports care for minor wounds, skin irritation, and insect bites",
      "Helps maintain healthy skin appearance"
    ]),
    usage: JSON.stringify([
      "Clean the affected area gently",
      "Apply a small amount of Kulirma Wound Balm to the area",
      "Cover lightly with clean cotton if necessary",
      "Apply 3–4 times a day or as required"
    ]),
    stock: 100,
    category: "Balm",
    prescriptionReq: false
  },
  {
    name: "Kulirma Veterinary Wound Balm",
    slug: "kulirma-veterinary-balm",
    image: "/assets/images/product_image/vet_wound_balm.png",
    price: 153,
    priceDisplay: "₹153",
    shortDescription: "Ayurvedic herbal balm formulated to support wound care and skin health in animals and birds.",
    description: "Kulirma Veterinary Wound Balm is a traditional Ayurvedic herbal formulation developed to support wound care and skin health in animals and birds.",
    ingredients: "22 herbal Ayurvedic ingredients formulated specifically for animal wound care.",
    benefits: JSON.stringify([
      "Helps support natural wound care in animals",
      "Helps soothe skin irritation and insect bites",
      "Supports care for minor skin infections and wounds",
      "Helps protect wounds from dirt and external contaminants",
      "Supports overall skin health in animals"
    ]),
    usage: JSON.stringify([
      "Clean the affected area gently",
      "Apply a small amount of balm to the wound or affected skin",
      "Use 2–3 times a day as required",
      "Ensure the balm is applied externally and not ingested by the animal"
    ]),
    stock: 100,
    category: "Veterinary",
    prescriptionReq: false
  },
  {
    name: "Kulirma Revive Plus Charma Varnam",
    slug: "kulirma-charma-varnam",
    image: "/assets/images/product_image/charma_varnam.png",
    price: 0,
    priceDisplay: "Price on Request",
    shortDescription: "Ayurvedic herbal formulation designed to help improve the appearance of dark spots and support healthy, balanced skin tone.",
    description: "Kulirma Revive Plus Charma Varnam is a traditional Ayurvedic herbal formulation developed to support healthy skin care.",
    ingredients: "Herbal Ayurvedic ingredients used for skin tone restoration.",
    benefits: JSON.stringify([
      "Helps improve the appearance of dark spots and uneven skin tone",
      "Supports overall skin clarity and texture",
      "Helps maintain healthy-looking skin",
      "Gentle herbal formulation suitable for regular skin care",
      "Can be used as a mild alternative to soaps or powders for children"
    ]),
    usage: JSON.stringify([
      "Mix a small amount with water",
      "Apply to areas with dark spots",
      "Allow it to dry naturally",
      "Rinse gently with water"
    ]),
    stock: 100,
    category: "Skin Care",
    prescriptionReq: false
  },
  {
    name: "Kulirma Sahasrashuddhi Oil",
    slug: "kulirma-sahasrashuddhi-oil",
    image: "/assets/images/SahasraShuddhi.jpg",
    price: 2600,
    priceDisplay: "₹2600",
    shortDescription: "Ayurvedic herbal formulation designed to support natural body balance and promote overall wellness.",
    description: "Kulirma Sahasrashuddhi Oil is an Ayurvedic formulation used traditionally to support relief from migraine, sinus discomfort, and headaches through nasal application therapy.",
    ingredients: "Traditional Ayurvedic herbal oil preparation.",
    benefits: JSON.stringify([
      "Supports overall body balance and wellness",
      "Helps maintain natural internal harmony",
      "Supports the body's natural cleansing processes",
      "Prepared using traditional Ayurvedic herbal ingredients",
      "Suitable for regular wellness support"
    ]),
    usage: JSON.stringify(["Use as directed according to the recommended instructions"]),
    stock: 100,
    category: "Oil",
    prescriptionReq: false
  }
]

async function main() {
  console.log('Seeding database...')
  
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product
    })
  }
  
  // Create admin user
  const adminExists = await prisma.user.findUnique({
    where: { email: 'kulirmamohan@gmail.com' }
  })
  
  if (!adminExists) {
    await prisma.user.create({
      data: {
        email: 'kulirmamohan@gmail.com',
        name: 'Admin',
        password: 'admin123', // In production, hash this!
        role: 'admin'
      }
    })
    console.log('Admin user created')
  }
  
  console.log('Seeding complete!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })