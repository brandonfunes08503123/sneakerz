require "open-uri"

Sneaker.destroy_all

tinker = Designer.create(name: "Tinker Hatfield")
lifestyle = Category.create(category_name: "Lifestyle")

jubilee = Sneaker.create(
    brand: "Jordan",
    name: "Jubilee",
    description: "The Air Jordan 11 ‘Jubilee’, also known as the Air Jordan 11 '25th Anniversary', celebrates the classic silhouette’s quarter-century birthday with a monochrome black finish throughout the upper, constructed from a traditional blend of ballistic mesh and patent leather. In keeping with the shoe’s silver anniversary, a 3D metallic Jumpman and matching ‘23’ branding decorate the heel, while ‘Jordan’ is spelled out in stylized silver lettering on each of the sneaker’s eyelets. The mid-top rides on a classic white foam midsole, supported by a translucent rubber outsole.",
    date: "2020-12-12",
    sku: "CT8012 011",
    price: 258,
    designer_id: tinker.id,
    category_id: lifestyle.id
)

jubilee_sm_checkout = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee_SM_Checkout.jpg')
jubilee_lrg_checkout = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee_LRG_Checkout.jpg')
jubilee_sm_splash = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee-sm.jpg')

jubilee.photos.attach(
    io: jubilee_sm_checkout,
    filename: 'jubilee_sm_checkout.png'
)

jubilee.photos.attach(
    io: jubilee_lrg_checkout,
    filename: 'jubilee_lrg_checkout.png'
)

jubilee.photos.attach(
    io: jubilee_sm_splash,
    filename: 'jubilee_sm_splash.png'
)