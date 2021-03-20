require "open-uri"

Sneaker.destroy_all
Designer.destroy_all
Category.destroy_all
# Inventory.destroy_all

tinker = Designer.create(name: "Tinker Hatfield")
lifestyle = Category.create(name: "Lifestyle")

jubilee = Sneaker.create(
    brand: "Air Jordan",
    nickname: "Jubilee",
    name: "Air Jordan 11 Retro 'Jubilee / 25th Anniversary'",
    description: "The Air Jordan 11 ‘Jubilee’, also known as the Air Jordan 11 '25th Anniversary', celebrates the classic silhouette’s quarter-century birthday with a monochrome black finish throughout the upper, constructed from a traditional blend of ballistic mesh and patent leather. In keeping with the shoe’s silver anniversary, a 3D metallic Jumpman and matching ‘23’ branding decorate the heel, while ‘Jordan’ is spelled out in stylized silver lettering on each of the sneaker’s eyelets. The mid-top rides on a classic white foam midsole, supported by a translucent rubber outsole.",
    date: "2020-12-12",
    sku: "CT8012 011",
    price: 258,
    designer_id: tinker.id,
    category_id: lifestyle.id
)

jubilee_mac_profile= open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee_SM_Checkout.jpg')
jubilee_profile = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee_LRG_Checkout.jpg')
jubilee_sm_splash = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee-sm.jpg')

jubilee.photos.attach(
    io: jubilee_mac_profile,
    filename: 'jubilee_mac_size.jpg'
)

jubilee.photos.attach(
    io: jubilee_profile,
    filename: 'jubilee_profile.jpg'
)

jubilee.photos.attach(
    io: jubilee_sm_splash,
    filename: 'jubilee_sm_splash.jpg'
)

kaws4 = Sneaker.create(
    brand: "Air Jordan",
    name: "KAWS x Air Jordan 4 Retro Cool Grey",
    nickname: "Cool Grey",
    description: "The KAWS x Air Jordan 4 Retro is a collaboration between the Jordan Brand and Brooklyn-based street artist KAWS, a.k.a. Brian Donnelly. The design removes the silhouette’s traditional plastic accents and dresses the entire upper and midsole in a premium grey suede upper. The sneaker also features KAWS’ ‘XX’ branding on the heel tab. The shoes were released alongside a small capsule collection that included a coaches jacket, hoodie, t-shirt, and hat in March of 2017. The hype was so intense for this release that the in-store raffle at Patta in London was read the riot act by the police and sneakerheads hacked into Donnelly’s website for a chance at the drop.",
    date: "2017-03-31",
    sku: "930155 003",
    price: 231,
    designer_id: tinker.id,
    category_id: lifestyle.id
)

kaws4_mac_sz = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/4s/KAWS_Cool_Grey/Kaws_4s_Mac_Sz.jpg')
kaws4_profile = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/4s/KAWS_Cool_Grey/Kaws_4s_profile.jpg')

kaws4.photos.attach(
    io: kaws4_mac_sz,
    filename: 'kaws_mac_sz.jpg'
)

kaws4.photos.attach(
    io: kaws4_profile,
    filename: 'kaws_profile.jpg'
)


# creating the Inventory
# sneakers = Sneaker.all
# sizes = []
# prices = []

# (4..12).step(0.5) do |n|
#     sizes << n
# end

# sizes.each do |size|
#     if(size < 8)
#         prices << rand(150..220)
#     else
#         prices << rand(220..500)
#     end
# end 

# sneakers.each do |sneaker|
#     Inventory.create(
#         id: sneaker.id,
#         size: sizes,
#         price: prices
#     )
# end