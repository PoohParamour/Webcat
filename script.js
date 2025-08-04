// Cat breeds data
const catBreeds = [
    {
        name: "แมวโกนจา",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_21_4dca252725.webp",
        description: "แมวไทยโบราณที่มีเอกลักษณ์โดดเด่นจากขนสีทองแดง แต้มด้วยสีน้ำตาลเข้มเก้าจุด เชื่อกันว่าเป็นแมวนำโชค",
        weight: "เมีย: 3-4 กก. / ผู้: 4-5 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 33-38 ซม.",
        fur: "ขนสั้น หนา นุ่ม",
        eyes: "เหลืองอมเขียว",
        traits: ["ฉลาด", "รักสงบ", "ขี้อ้อน", "ชอบเล่น"],
        lifespan: "12-15 ปี",
        origin: "ไทย"
    },
    {
        name: "แมวขาวมณี",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_22_86c4f8e3e2.webp",
        description: "แมวไทยพันธุ์พื้นเมือง ขนสีขาวล้วน ตาสีฟ้า เชื่อกันว่าเป็นแมวนำโชคลาภ ช่วยเสริมสร้างความมั่งคั่ง",
        weight: "เมีย: 2.5-4.5 กก. / ผู้: 3.5-5.5 กก.",
        size: "สูง: 23-28 ซม. / ยาว: 30-38 ซม.",
        fur: "ขนสั้น หนา นุ่ม สีขาวล้วน",
        eyes: "ฟ้า, เหลืองอำพัน, เขียว",
        traits: ["ร่าเริง", "ฉลาด", "ขี้เล่น", "ปรับตัวเก่ง"],
        lifespan: "12-15 ปี",
        origin: "ไทย"
    },
    {
        name: "แมวคาราคัล",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_23_e35af3f86a.webp",
        description: "แมวป่าขนาดกลาง มีขนสีน้ำตาลอ่อน ลายจุดสีดำ นิสัยร่าเริง ชอบเล่นปีนป่าย เหมาะกับผู้ที่มีเวลาออกกำลังกาย",
        weight: "เมีย: 11-16 กก. / ผู้: 16-20 กก.",
        size: "สูง: 40-45 ซม. / ยาว: 85-90 ซม.",
        fur: "ขนสั้น หนา นุ่ม ฟู",
        eyes: "น้ำตาลอำพัน",
        traits: ["ฉลาด", "ร่าเริง", "รักอิสระ", "ชอบผจญภัย"],
        lifespan: "15-17 ปี",
        origin: "แอฟริกา"
    },
    {
        name: "แมวชาร์เทอร์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_24_ed5d6c0663.webp",
        description: "แมวขนสั้นสายพันธุ์เก่าแก่จากฝรั่งเศส ขึ้นชื่อเรื่องความฉลาด สีขนเป็นเอกลักษณ์ด้วยสีฟ้าเทา",
        weight: "เมีย: 4-8 กก. / ผู้: 5-9 กก.",
        size: "สูง: 30-35 ซม. / ยาว: 50-60 ซม.",
        fur: "ขนสั้น หนาแน่น เงางาม",
        eyes: "เหลือง, ทอง, เขียว",
        traits: ["ฉลาด", "ร่าเริง", "รักเจ้าของ", "ต้องการพื้นที่ส่วนตัว"],
        lifespan: "12-15 ปี",
        origin: "ฝรั่งเศส"
    },
    {
        name: "แมวชินชิลล่า",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_25_56f0c29dd4.webp",
        description: "แมวที่มีขนหนายาว มีนิสัยร่าเริง ขี้เล่น ฉลาด และชอบอยู่ใกล้ชิดกับคน",
        weight: "เมีย: 3-4.5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 35-40 ซม.",
        fur: "ขนสั้น หนาแน่น นุ่ม ฟู",
        eyes: "เขียว, ทอง, อำพัน",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด"],
        lifespan: "12-15 ปี",
        origin: "อังกฤษ"
    },
    {
        name: "แมวโซมาลี",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_26_66c21503b6.webp",
        description: "มีต้นกำเนิดจากแมวอะบิสซิเนียน พัฒนาขึ้นผ่านการผสมข้ามสายพันธุ์จากแมวอะบิสซิเนียนที่มีขนยาว",
        weight: "เมีย: 2.5-4 กก. / ผู้: 3-5 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 30-35 ซม.",
        fur: "ขนยาว ปานกลาง หนา ฟู",
        eyes: "เขียว, ฟ้า",
        traits: ["ฉลาด", "ร่าเริง", "รักเจ้าของ"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวไซบีเรียน",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_27_6a29a91ac1.webp",
        description: "มีต้นกำเนิดจากป่าไซบีเรีย รัสเซีย พัฒนาโดยธรรมชาติ มีขนหนา 2 ชั้น ทนต่อความหนาวเย็น",
        weight: "เมีย: 4-6 กก. / ผู้: 5-8 กก.",
        size: "สูง: 30-35 ซม. / ยาว: 50-60 ซม.",
        fur: "ขนยาว หนาแน่น 2 ชั้น",
        eyes: "เขียว, เหลือง, ทอง",
        traits: ["ฉลาด", "ร่าเริง", "รักเด็ก", "เข้ากับสัตว์อื่น"],
        lifespan: "12-15 ปี",
        origin: "รัสเซีย"
    },
    {
        name: "แมวเตอร์กิชแวน",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_28_9c04f41ca8.webp",
        description: "มีถิ่นกำเนิดจากทะเลสาบวานในตุรกี มีเอกลักษณ์เป็นแมวที่ว่ายน้ำเก่ง ชอบเล่นน้ำ",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 28-35 ซม. / ยาว: 35-45 ซม.",
        fur: "ขนสั้น หนาแน่น ฟู",
        eyes: "ฟ้า, ทอง, เขียว",
        traits: ["ฉลาด", "ร่าเริง", "รักเจ้าของ", "ชอบเล่นน้ำ"],
        lifespan: "12-15 ปี",
        origin: "ตุรกี"
    },
    {
        name: "แมวท็องกินิส",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_29_3a557187c9.webp",
        description: "เกิดจากการผสมข้ามสายพันธุ์ระหว่างแมวเบอร์มีสและแมววิเชียรมาศ ในช่วงปี 1930 ในอเมริกา",
        weight: "เมีย: 2.5-4.5 กก. / ผู้: 3.5-5.5 กก.",
        size: "สูง: 23-30 ซม. / ยาว: 33-38 ซม.",
        fur: "ขนสั้น แต่หนา",
        eyes: "เขียว, ฟ้า",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวทิฟฟานี",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_30_de60ad82a9.webp",
        description: "สายพันธุ์แมวที่ถูกผสมข้ามระหว่างเปอร์เซีย ชินชิลล่าและเบอร์มีส ทำให้ได้เอกลักษณ์เฉพาะตัว",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-30 ซม. / ยาว: 30-38 ซม.",
        fur: "ขนยาว หนา นุ่ม",
        eyes: "เขียว, ฟ้า",
        traits: ["เงียบสงบ", "อ่อนโยน", "รักเจ้าของ"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวนอร์วีเจียน ฟอร์เรสต์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_31_26dd2a57b9.webp",
        description: "สายพันธุ์เก่าแก่ มีต้นกำเนิดจากแมวป่าที่อาศัยในป่าทางตอนเหนือของยุโรป เดินทางมาถึงนอร์เวย์พร้อมไวกิ้ง",
        weight: "เมีย: 3.5-6 กก. / ผู้: 4.5-7.5 กก.",
        size: "สูง: 30-38 ซม. / ยาว: 38-46 ซม.",
        fur: "ขนยาว หนาสองชั้น",
        eyes: "เขียว, อำพัน, ฟ้า",
        traits: ["สุขุม", "รักอิสระ", "ฉลาด"],
        lifespan: "12-16 ปี",
        origin: "นอร์เวย์"
    },
    {
        name: "แมวบริติช ช็อตแฮร์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_32_b32cf937c9.webp",
        description: "แมวสายพันธุ์เก่าแก่จากอังกฤษ พัฒนาโดยการผสมข้ามระหว่างแมวพื้นเมืองกับแมวขนสั้นต่างประเทศ",
        weight: "เมีย: 4-8 กก. / ผู้: 5-10 กก.",
        size: "สูง: 25-33 ซม. / ยาว: 33-40 ซม.",
        fur: "ขนสั้น หนา นุ่ม",
        eyes: "ทอง, อำพัน, ฟ้า",
        traits: ["รักสงบ", "อ่อนโยน", "รักเจ้าของ"],
        lifespan: "12-15 ปี",
        origin: "อังกฤษ"
    },
    {
        name: "แมวบอมเบย์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_33_ecd982d95a.webp",
        description: "มีต้นกำเนิดจากสหรัฐอเมริกา มีนิสัยคล้ายเด็ก ชอบให้เล่นด้วย ต้องการเวลาในการดูแลเอาใจใส่อย่างสม่ำเสมอ",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-28 ซม. / ยาว: 33-38 ซม.",
        fur: "ขนสั้นเงางาม",
        eyes: "ทอง, อำพัน",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด", "รักเจ้าของ"],
        lifespan: "12-16 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวบาหลี",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_34_76b3ae16e9.webp",
        description: "ไม่ได้มาจากบาหลี แต่ชื่อมาจากความสง่างามคล้ายนักเต้นชาวบาหลี มีลักษณะคล้ายแมววิเชียรมาศแต่ขนยาวกว่า",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-28 ซม. / ยาว: 30-46 ซม.",
        fur: "ขนยาวฟู",
        eyes: "ฟ้าไฟลิน",
        traits: ["ร่าเริง", "ขี้เล่น", "ชอบปีนป่าย", "ฉลาด"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวเบงกอล",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_35_3d3e2653d2.webp",
        description: "เกิดจากการผสมข้ามระหว่างแมวป่ากับแมวบ้าน เพื่อต้องการแมวลวดลายคล้ายเสือดาวแต่นิสัยเชื่องเหมือนแมวบ้าน",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-28 ซม. / ยาว: 46-64 ซม.",
        fur: "ขนสั้น นุ่ม ลายเสือดาว",
        eyes: "เขียว, อำพัน",
        traits: ["ร่าเริง", "ขี้เล่น", "ชอบปีนป่าย", "ฝึกง่าย"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวเบอร์เมน",
        image: "https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg",
        description: "มีต้นกำเนิดจากพม่า ได้รับการยกย่องว่าเป็นแมวศักดิ์สิทธิ์ คอยปกป้องคุ้มครองพระสงฆ์",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-28 ซม. / ยาว: 30-46 ซม.",
        fur: "ขนยาว นุ่ม",
        eyes: "ฟ้า, เหลือง, เขียว",
        traits: ["ใจเย็น", "อ่อนโยน", "รักความสงบ", "ฝึกง่าย"],
        lifespan: "12-16 ปี",
        origin: "พม่า"
    },
    {
        name: "แมวเปอร์เซีย",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_37_f7615339a8.webp",
        description: "มีต้นกำเนิดจากอิหร่าน ชาวตะวันตกเริ่มนำเข้ามาเลี้ยงในศตวรรษที่ 16 ลักษณะเด่นคือขนยาว นุ่มฟู",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-28 ซม. / ยาว: 30-46 ซม.",
        fur: "ขนยาวนุ่มฟู",
        eyes: "ฟ้า, ทอง, อำพัน",
        traits: ["ใจเย็น", "อ่อนโยน", "รักความสงบ", "ชอบนอน"],
        lifespan: "12-15 ปี",
        origin: "อิหร่าน"
    },
    {
        name: "แมวมันช์กิ้น",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_38_05d43c290a.webp",
        description: "แมวสัญชาติอังกฤษ เกิดจากการกลายพันธุ์ทางธรรมชาติ ส่งผลให้ขาสั้น ได้รับความนิยมในทศวรรษ 1990",
        weight: "เมีย: 2-4 กก. / ผู้: 3-5 กก.",
        size: "สูง: 20-25 ซม. / ยาว: 23-30 ซม.",
        fur: "ขนสั้น หนา นุ่ม",
        eyes: "ฟ้า, เขียว, อำพัน",
        traits: ["ร่าเริง", "ขี้เล่น", "ชอบปีนป่าย", "ฝึกง่าย"],
        lifespan: "12-15 ปี",
        origin: "อังกฤษ"
    },
    {
        name: "แมวเมนคูน",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_39_75f99419c4.webp",
        description: "มีต้นกำเนิดจากรัฐเมน สหรัฐอเมริกา เรียกได้ว่าเป็นสายพันธุ์แมวที่ใหญ่ที่สุดสายพันธุ์หนึ่งของโลก",
        weight: "เมีย: 4-6 กก. / ผู้: 6-8 กก.",
        size: "สูง: 25-30 ซม. / ยาว: 46-64 ซม.",
        fur: "ขนยาว หนา นุ่ม",
        eyes: "เขียว, อำพัน",
        traits: ["อ่อนโยน", "ขี้เล่น", "เป็นมิตร"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวแมงซ์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_40_7303140e4c.webp",
        description: "มีต้นกำเนิดบนเกาะแมน อังกฤษ ลักษณะเด่นคือไม่มีหาง หรือหางสั้นกุด เกิดจากการกลายพันธุ์ทางธรรมชาติ",
        weight: "เมีย: 3.6-5.4 กก. / ผู้: 4.5-6.8 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 46-53 ซม.",
        fur: "ขนสั้น หนาแน่น",
        eyes: "เขียว, ทอง, อำพัน",
        traits: ["ร่าเริง", "ขี้เล่น", "ช่างสงสัย", "รักความสนใจ"],
        lifespan: "14-16 ปี",
        origin: "อังกฤษ"
    },
    {
        name: "แมวรัสเซียนบลู",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_41_e22e3634f9.webp",
        description: "มีต้นกำเนิดจากท่าเรืออาร์คแองเจิล รัสเซีย เอกลักษณ์คือขนสั้นสีเทาฟ้า ดวงตาสีเขียว",
        weight: "เมีย: 3.6-4.5 กก. / ผู้: 4.5-6.4 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 46-53 ซม.",
        fur: "ขนสั้น หนาแน่น นุ่ม",
        eyes: "เขียว",
        traits: ["รักสงบ", "ฉลาด", "ช่างสังเกต", "รักความสะอาด"],
        lifespan: "15-20 ปี",
        origin: "รัสเซีย"
    },
    {
        name: "แมวแร็กดอลล์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_42_1ea384d92f.webp",
        description: "สายพันธุ์แมวที่มีขนาดใหญ่ น้ำหนักตัวมาก เลี้ยงง่าย แต่ต้องแปรงขนอย่างสม่ำเสมอ",
        weight: "เมีย: 4.5-6.8 กก. / ผู้: 5.4-9.1 กก.",
        size: "สูง: 30-35 ซม. / ยาว: 53-64 ซม.",
        fur: "ขนยาว หนานุ่ม",
        eyes: "ฟ้า",
        traits: ["อ่อนโยน", "ใจเย็น", "รักความสนใจ", "เข้ากับเด็ก"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมววิเชียรมาศ",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_43_5bca6fa1aa.webp",
        description: "แมวพันธุ์พื้นเมืองของไทย มีสีที่เป็นเอกลักษณ์เฉพาะตัว ได้รับความนิยมทั้งในไทยและต่างประเทศ",
        weight: "เมีย: 3.2-4.5 กก. / ผู้: 4.5-5.4 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 46-53 ซม.",
        fur: "ขนสั้น เงางาม",
        eyes: "ฟ้า",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด", "ช่างสงสัย"],
        lifespan: "12-15 ปี",
        origin: "ไทย"
    },
    {
        name: "แมวสก๊อตติช โฟลด์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_44_28ce4615e1.webp",
        description: "มีต้นกำเนิดจากสกอตแลนด์ ปี 1961 เกิดจากลูกแมวที่มีลักษณะหูพับลงมาข้างหน้า ด้วยความน่ารัก น่าเอ็นดู",
        weight: "เมีย: 3.2-4.5 กก. / ผู้: 4.5-6.4 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 46-53 ซม.",
        fur: "ขนสั้น หนาแน่น",
        eyes: "ทอง, อำพัน, เขียว",
        traits: ["ร่าเริง", "ขี้เล่น", "อ่อนโยน", "รักความสนใจ"],
        lifespan: "12-15 ปี",
        origin: "สกอตแลนด์"
    },
    {
        name: "แมวสโนว์ชู",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_45_2b917fc2c2.webp",
        description: "แมวสายพันธุ์ใหม่พัฒนาจากแมวสยาม มีเอกลักษณ์คืออุ้งเท้าสีขาวและดวงตาสีฟ้ากลมโต คล้ายถั่ววอลนัท",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 30-38 ซม.",
        fur: "ขนสั้น",
        eyes: "ฟ้า",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด", "เข้ากับเด็ก"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวสฟิงซ์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_46_fcd19520b5.webp",
        description: "แมวไร้ขนสายพันธุ์เดียวในออสเตรเลีย พัฒนามาจากแมวที่กลายพันธุ์ในแคนาดาปี 1966 ผิวหนังเปลี่ยนสีตามอุณหภูมิ",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 30-38 ซม.",
        fur: "ไม่มีขน",
        eyes: "ฟ้า, อำพัน, เขียว",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด"],
        lifespan: "10-14 ปี",
        origin: "แคนาดา"
    },
    {
        name: "แมวสีสวาท",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_47_efba916e06.webp",
        description: "แมวโคราชเป็นแมวขนสั้นสีดำสนิท มีลักษณะคล้ายแมวรัสเซียบลู แต่มีขนชั้นเดียว รูปร่างกลม ตาสีเขียวอ่อน",
        weight: "เมีย: 4-5 กก. / ผู้: 5-6 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 30-38 ซม.",
        fur: "ขนสั้นนุ่ม",
        eyes: "เขียว",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด"],
        lifespan: "12-15 ปี",
        origin: "ไทย"
    },
    {
        name: "แมวอเมริกัน ช็อตแฮร์",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_48_632e3bd9a6.webp",
        description: "เจ้าเหมียวอเมริกันขนสั้น เป็นแมวที่สุขุม ใจเย็น เข้ากับคนง่าย เหมาะกับทุกครอบครัว มีสัญชาตญาณนักล่า",
        weight: "เมีย: 4-5 กก. / ผู้: 5-6 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 30-38 ซม.",
        fur: "ขนมีความหนาและแน่น",
        eyes: "ฟ้า, อำพัน, เขียว",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด"],
        lifespan: "15-20 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวอเมริกันเคิร์ล",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_49_e99aa56250.webp",
        description: "สายพันธุ์แมวที่มีเอกลักษณ์เฉพาะตัว ด้วยลักษณะหูที่พลิกม้วนไปด้านหลัง 90 องศา ดวงตาเหมือนเม็ดวอลนัท",
        weight: "เมีย: 3-5 กก. / ผู้: 4-6 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 30-38 ซม.",
        fur: "ขนสั้น หนา นุ่ม",
        eyes: "ฟ้า, อำพัน, เขียว",
        traits: ["ร่าเริง", "ขี้เล่น", "ฉลาด"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    },
    {
        name: "แมวอ็อกซิแคต",
        image: "https://d2aoxpkmy9bqkr.cloudfront.net/image_50_cff8fb07dc.webp",
        description: "แมวพันธุ์อ็อกซิแคทมีขนาดกลางถึงใหญ่ ลักษณะเด่นคือมีลายจุดเฉพาะตัว ใบหน้าคล้ายเสือดาว",
        weight: "เมีย: 3.5-4.5 กก. / ผู้: 4-5 กก.",
        size: "สูง: 23-25 ซม. / ยาว: 38-46 ซม.",
        fur: "ขนสั้นหนา",
        eyes: "เขียว, อำพัน, ฟ้า",
        traits: ["ร่าเริง", "ฉลาด", "ขี้เล่น", "ชอบอยู่กับคน"],
        lifespan: "12-15 ปี",
        origin: "สหรัฐอเมริกา"
    }
];

// DOM elements
const catBreedsGrid = document.getElementById('cat-breeds-grid');
const scrollToTopBtn = document.getElementById('scrollToTop');

// Create cat breed card
function createCatCard(cat, index) {
    const traits = cat.traits.map(trait => `<span class="trait-badge">${trait}</span>`).join('');
    
    return `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="cat-card loading" style="animation-delay: ${index * 0.1}s">
                <div class="cat-image-wrapper">
                    <img src="${cat.image}" alt="${cat.name}" class="cat-image" loading="lazy">
                    <div class="cat-badge">${cat.origin}</div>
                </div>
                <div class="cat-card-body">
                    <h3 class="cat-card-title">${cat.name}</h3>
                    <p class="cat-description">${cat.description}</p>
                    
                    <div class="cat-specs">
                        <div class="spec-row">
                            <span class="spec-label">น้ำหนัก:</span>
                            <span class="spec-value">${cat.weight}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">ขนาด:</span>
                            <span class="spec-value">${cat.size}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">ขน:</span>
                            <span class="spec-value">${cat.fur}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">ตา:</span>
                            <span class="spec-value">${cat.eyes}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">อายุเฉลี่ย:</span>
                            <span class="spec-value">${cat.lifespan}</span>
                        </div>
                    </div>
                    
                    <div class="cat-traits">
                        ${traits}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize cat breeds grid
function initializeCatGrid() {
    const catCardsHTML = catBreeds.map((cat, index) => createCatCard(cat, index)).join('');
    catBreedsGrid.innerHTML = catCardsHTML;
    
    // Trigger loading animation
    setTimeout(() => {
        const cards = document.querySelectorAll('.cat-card.loading');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('loaded');
                card.classList.remove('loading');
            }, index * 100);
        });
    }, 100);
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to top functionality
function initializeScrollToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Navbar background change on scroll
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(79, 70, 229, 0.95))';
        } else {
            navbar.style.background = 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))';
        }
    });
}

// Intersection Observer for animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Error handling for images
function initializeImageErrorHandling() {
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.style.cssText = `
                width: 100%;
                height: 220px;
                background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #6b7280;
                font-size: 0.9rem;
            `;
            placeholder.innerHTML = '<i class="fas fa-cat" style="font-size: 2rem;"></i>';
            e.target.parentNode.replaceChild(placeholder, e.target);
        }
    }, true);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCatGrid();
    initializeSmoothScrolling();
    initializeScrollToTop();
    initializeNavbarScroll();
    initializeIntersectionObserver();
    initializeImageErrorHandling();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any responsive elements if needed
    const cards = document.querySelectorAll('.cat-card');
    cards.forEach(card => {
        card.style.transition = 'none';
        setTimeout(() => {
            card.style.transition = 'var(--transition)';
        }, 100);
    });
});