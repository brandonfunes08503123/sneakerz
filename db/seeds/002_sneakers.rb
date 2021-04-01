require "open-uri"

Sneaker.destroy_all
Designer.destroy_all
Category.destroy_all
# Inventory.destroy_all

tinker = Designer.create(name: "Tinker Hatfield")
peterMoore = Designer.create(name: "Peter Moore")
lifestyle = Category.create(name: "Lifestyle")
skateboard = Category.create(name: "Skateboarding")


nostalgia_sbs = [
    {
        brand: "Nike",
        nickname: "Atmos Elephant",
        name: "Dunk Low Pro SB 'Atmos Elephant'",
        description: "The Nike Dunk Low Pro SB ‘Atmos Elephant’ showcases a familiar design reminiscent of Atmos’ highly coveted Air Max 1 collaboration, originally released in 2006 and reissued in 2017. The low-top features a perforated white leather toe box, black suede quarter panel and grey elephant-print overlays along the forefoot and heel. The signature Swoosh stands out in Clear Jade, matching Nike branding hits at the heel tab and woven tongue tag.",
        date: "2020-11-11",
        sku: "BQ6817009",
        upper_material: "Leather",
        main_color: "Grey",
        colorway: "Medium Grey/Black/White/Clear Jade",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Blue Lobster",
        name: "Dunk Low Premium SB 'Blue Lobster'",
        description: "Designed in collaboration with New England retailer Concepts, the Dunk Low Premium SB ‘Blue Lobster’ takes inspiration from the crustacean of the same name, featuring a Nightshade leather base with speckled Dark Slate overlays. Special details include a blue and white plaid pattern on the lining and an elastic band wrapped around the forefoot—a nod to the traditional safety measure used to secure lobster claws.",
        date: "2009-06-20",
        sku: "313170342",
        upper_material: "Leather",
        main_color: "Blue",
        colorway: "Nightshade/Dark Slate",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Raygun",
        name: "Dunk Low Pro SB 'Raygun'",
        description: "When Nike SB first unveiled the ‘Raygun’ edition of the Dunk Low Pro SB in 2005, the shoe was part of a two-pack collection of black and white renditions. The shoe takes inspiration from Nike’s fictional ABA team known as the Roswell Rayguns. The colorway is based on the team’s home uniforms, with the Raygun team logo appearing on the heel.",
        date: "2005-02-01",
        sku: "304292803",
        upper_material: "Leather",
        main_color: "Orange",
        colorway: "Orange Flash/Black-Black",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Tiffany",
        name: "Diamond Supply Co. x Dunk Low Pro SB 'Tiffany'",
        description: "Releasing in August 2005 as part of the Team Manager series, the Diamond Supply Co. x Dunk Low Pro SB ‘Tiffany’ drew long lines and campouts at skate shops throughout the country. The leather upper is finished in Aqua and accented with a metallic silver Swoosh. The black leather overlays feature a crocodile-embossed texture and contrast white stitching.",
        date: "2005-08-01",
        sku: "304292402",
        upper_material: "Leather",
        main_color: "Teal",
        colorway: "Aqua/Chrome",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Heineken",
        name: "Dunk Low Pro SB 'Heineken'",
        description: "The Dunk Low Pro SB ‘Heineken’ takes inspiration from the signature green bottles used by the Dutch beer brand. The low-top sports a white leather upper with green nubuck overlays and a black suede Swoosh. The color scheme up top is repeated on the shoe’s tooling, featuring a green midsole and crisp white outsole. Bordered in white, an embroidered red star graces the lateral heel.",
        date: "2003-03-05",
        sku: "304292302",
        upper_material: "Leather",
        main_color: "Green",
        colorway: "Classic Green/Black-White-Red",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Jedi",
        name: "Dunk Low Pro SB 'Jedi'",
        description: "The tattered attire and green skin of Yoda, the Jedi master who taught Luke Skywalker the ways of the Force in The Empire Strikes Back, serve as the inspiration for the Dunk Low Pro SB 'Jedi,' first released in 2004. Further Star Wars touches can be seen on the laces, heel panel and tongue of the skate shoe, which all sport a lightsaber-style neon green.",
        date: "2004-05-01",
        sku: "304292222",
        upper_material: "Leather",
        main_color: "Tan",
        colorway: "Khaki/Baroque Brown-Safari",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Lobster",
        name: "Dunk Low Premium SB 'Lobster'",
        description: "Boston based Concepts and Nike SB used lobster dinner as inspiration for this exclusive colorway. The Dunk Low Premium SB 'Lobster' features a soft suede upper dressed in an alternating Pink Clay and Sport Red color scheme as a nod to the crustacean’s iconic colors. The sneaker also boasts an oversized leather Swoosh, bib-inspired insole and sock liners and a bright blue wristband around the toe, which alludes to the blue elastic bands placed around a lobster's claws.",
        date: "2008-05-31",
        sku: "313170661",
        upper_material: "Leather",
        main_color: "Red",
        colorway: "Sport Red/Pink Clay",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "MF Doom",
        name: "Dunk High SB Premium 'MF Doom'",
        description: "With the Dunk High SB Premium ‘MF Doom,’ Nike SB joined forces with the acclaimed underground rapper. The high-top, released in July 2007, sports a black suede upper with Midnight Fog leather overlays, accented with reflective piping. ‘Doom’ embroidery appears on the collar, with a faux ostrich skin on the toe wrap. An MF Doom mask graphic can be found on the tongue tabs, while red laces offer a bold contrast anchored with ‘SPR’ and ‘VLN’ lace dubraes. Additional MF Doom artwork can be found on the sockliner, and again underneath the translucent rubber outsole.",
        date: "2007-07-24",
        sku: "313171004",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/ Black-Midnight Fog",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    }, 
    {
        brand: "Nike",
        nickname: "Purple Lobster",
        name: "Concepts x Dunk Low SB 'Purple Lobster'",
        description: "Concepts and Nike SB are back at it again, with a new iteration of the 'Lobster' inspiration. The Dunk Low Premium SB 'Purple Lobster' is similar to the three previous executions, inspired by odd color specimens found in nature due to genetic abnormalities that make their exoskeleton appear in different shades, such as yellow, blue and purple. Special details include a red and white plaid pattern on the lining, and an elastic band wrapped around the forefoot similar to how lobster claws are secured.",
        date: "2018-12-14",
        sku: "BV1310555",    
        upper_material: "Leather",
        main_color: "Purple",
        colorway: "Voltage Purple/Court Purple-Voltage Purple",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Purple Pigeon",
        name: "Dunk Low Pro SB 'Purple Pigeon'",
        description: "The Nike SB Dunk Low Pro SB ‘Purple Pigeon’ was released In 2006 and has a close resemblance to the ‘Pigeon’ Dunk since they share a grey base color. The ‘Purple Pigeon’ showcases a Light Graphite upper with a Violet Swoosh and outsole.",
        date: "2006-11-01",
        sku: "304292051",
        upper_material: "Leather",
        main_color: "Purple",
        colorway: "Light Graphite/Prism Violet",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Shoe Goo",
        name: "Dunk High Premium SB 'Shoe Goo'",
        description: "Based on Shoe Goo,which is a product used in skating for many purposes, these kicks make good use of treated coated canvas and crinkled patent leather, with that beautiful clear gum midsole only accenting the great looks of these kicks. Undoubtedly, these are some of the cleanest Dunk Hi’s out of Nike Skateboarding in a while, and will most likely join the storied ranks of the brand’s most hyped shoes, for better or for worse",
        date: "2008-09-13",
        sku: "313171012",
        upper_material: "Leather",
        main_color: "Red",
        colorway: "Red/Jean-Blue/White/Gummy-Brown",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Red Cement",
        name: "Supreme x Dunk Low Premium SB 'Red Cement'",
        description: "Released in July 2012, the Supreme x Dunk Low Premium SB represented the pioneering streetwear brand’s first Dunk Low collaboration since 2002. Like its predecessors, this pair makes use of the iconic elephant print. Finished in Cement Grey, the distinctive design contrasts the low-top’s Fire Red leather inlays, while basic black makes its way to the Swoosh, laces, heel tab and outsole.",
        date: "2012-07-19",
        sku: "313170600",
        upper_material: "Leather",
        main_color: "Red",
        colorway: "Fire Red/Black-Cement Grey",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "White Cement",
        name: "Supreme x Dunk Low Premium SB 'White Cement'",
        description: "In October 2002, Supreme gave the Dunk Low Pro SB the Air Jordan 3 treatment by utilizing the iconic elephant print on the upper. The colorway, known as 'White Cement,' pairs the cement print with white leather and a royal blue inner lining. With a limited release and the first Nike SB x Supreme collaboration, it’s considered to be one of the most sought-after SBs in the shoe’s history.",
        date: "2002-09-01",
        sku: "304292001",
        upper_material: "Leather",
        main_color: "White",
        colorway: "White/Black-Cement Grey",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Tokyo",
        name: "Dunk Low Premium SB Taxi 'Tokyo'",
        description: "The Nike Dunk Low Premium SB Taxi ‘Tokyo,’ also known as the ‘Blue Bird,’ released as part of the 2006 Premium SB Taxi Cab series. Inspired by the color of Tokyo’s blue taxicabs, the low-top features a Chlorine Blue leather upper with unique black rectangles embroidered on the design. The look is accented by a white leather Swoosh and matching midsole, while subdued hits of black emerge on the lining, tongue, laces and outsole.",
        date: "2006-12-01",
        sku: "313170411",
        upper_material: "Leather",
        main_color: "Blue",
        colorway: "Chlorine Blue/White",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Taxi Series-Tokyo",
        name: "Dunk Low Pro SB'Taxi Series/Tokyo'",
        description: "Inspired by the colors of the Tokyo taxis, the Dunk Low Pro SB 'Taxi Series / Tokyo' was released as part of a larger collection paying tribute to the city’s public transportation. The low top sports a Grass leather upper with perforations on the toe box for breathability. The sneaker also features yellow details on the quarter panel, an oversized white leather wraparound Swoosh, and a padded tongue for an adaptive fit.",
        date: "2006-12-01",
        sku: "304292311",
        upper_material: "Leather",
        main_color: "Green",
        colorway: "Grass/White",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    },
    {
        brand: "Nike",
        nickname: "Twin Peaks",
        name: "Dunk High Premium SB 'Twin Peaks'",
        description: "The 1990s TV show Twin Peaks was a surreal addition to the airwaves back in the day, and the Nike SB Dunk High Premium ‘Twin Peaks’ pays homage to the series by utilizing features rarely seen in the silhouette. The upper trades off between suede and cracked leather, with bright green piping and an owl graphic sitting atop the Swoosh, and the insole also features TV graphics. This 2009 limited-edition shoe was only sold at select Nike SB outlets.",
        date: "2008-12-31",
        sku: "313171006",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Black",
        technology: "Zoom Air",
        silhouette: "Dunk SB",
        designer_id: peterMoore.id,
        category_id: skateboard.id
    }
]

nostalgia_sbs.each {|sneaker| Sneaker.create!(sneaker)}

Sneaker.all.each do |sneaker| 
    sku = sneaker[:sku].split(" ").join("")
    photo = open("https://sneakerz-seeds.s3-us-west-1.amazonaws.com/#{sku}.jpg")
    sneaker.photo.attach(
        io: photo,
        filename: "#{sku}.jpg"
    )
end




# jubilee = Sneaker.create(
#     brand: "Air Jordan",
#     nickname: "Jubilee",
#     name: "Air Jordan 11 Retro 'Jubilee / 25th Anniversary'",
#     description: "The Air Jordan 11 ‘Jubilee’, also known as the Air Jordan 11 '25th Anniversary', celebrates the classic silhouette’s quarter-century birthday with a monochrome black finish throughout the upper, constructed from a traditional blend of ballistic mesh and patent leather. In keeping with the shoe’s silver anniversary, a 3D metallic Jumpman and matching ‘23’ branding decorate the heel, while ‘Jordan’ is spelled out in stylized silver lettering on each of the sneaker’s eyelets. The mid-top rides on a classic white foam midsole, supported by a translucent rubber outsole.",
#     date: "2020-12-12",
#     sku: "CT8012 011",
#     designer_id: tinker.id,
#     category_id: lifestyle.id
# )

# jubilee_mac_profile= open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee_SM_Checkout.jpg')
# jubilee_profile = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee_LRG_Checkout.jpg')
# jubilee_sm_splash = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/11s/Jubilee/Jubilee-sm.jpg')

# jubilee.photos.attach(
#     io: jubilee_mac_profile,
#     filename: 'jubilee_mac_size.jpg'
# )

# jubilee.photos.attach(
#     io: jubilee_profile,
#     filename: 'jubilee_profile.jpg'
# )

# jubilee.photos.attach(
#     io: jubilee_sm_splash,
#     filename: 'jubilee_sm_splash.jpg'
# )

# kaws4 = Sneaker.create(
#     brand: "Air Jordan",
#     name: "KAWS x Air Jordan 4 Retro Cool Grey",
#     nickname: "Cool Grey",
#     description: "The KAWS x Air Jordan 4 Retro is a collaboration between the Jordan Brand and Brooklyn-based street artist KAWS, a.k.a. Brian Donnelly. The design removes the silhouette’s traditional plastic accents and dresses the entire upper and midsole in a premium grey suede upper. The sneaker also features KAWS’ ‘XX’ branding on the heel tab. The shoes were released alongside a small capsule collection that included a coaches jacket, hoodie, t-shirt, and hat in March of 2017. The hype was so intense for this release that the in-store raffle at Patta in London was read the riot act by the police and sneakerheads hacked into Donnelly’s website for a chance at the drop.",
#     date: "2017-03-31",
#     sku: "930155 003",
#     designer_id: tinker.id,
#     category_id: lifestyle.id
# )

# kaws4_mac_sz = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/4s/KAWS_Cool_Grey/Kaws_4s_Mac_Sz.jpg')
# kaws4_profile = open('https://sneakerz-seeds.s3-us-west-1.amazonaws.com/Jordans/4s/KAWS_Cool_Grey/Kaws_4s_profile.jpg')

# kaws4.photos.attach(
#     io: kaws4_mac_sz,
#     filename: 'kaws_mac_sz.jpg'
# )

# kaws4.photos.attach(
#     io: kaws4_profile,
#     filename: 'kaws_profile.jpg'
# )
