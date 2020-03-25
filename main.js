// DGrid('h1').on('click', function(){
//     alert('clicked');
// });

//call grid
var columnDefs = [
    {headerName: "Vid", field: "vid"},
    {headerName: "Video Id", field: "videoid"},
    {headerName: "Video Title", field: "videotitle"},
    {headerName: "Date Posted", field: "dateposted"},
    {headerName: "Date Uploaded", field: "dateuploaded"},
    {headerName: "Cat Id", field: "catid"},
    {headerName: "Cat Name", field: "catname"}
];
      
// specify the data
var rowData = [
    {
      "vid": 1839,
      "video_id": "VigF2Dy0P5M",
      "video_title": "Bhadragol || Episode-248 || March-20-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-03-20 12:30:03",
      "date_uploaded": "2020-03-20 03:45:01",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1838,
      "video_id": "TaIZSld9ns4",
      "video_title": "Ulto Sulto || Episode-106 || March-18-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-03-18 12:30:06",
      "date_uploaded": "2020-03-18 02:45:00",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1837,
      "video_id": "WHRR6QGSALI",
      "video_title": "Meri Bassai || Episode-646 || March-17-2020 || By Media Hub Official Channel",
      "date_posted": "2020-03-17 12:30:05",
      "date_uploaded": "2020-03-17 03:45:00",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1833,
      "video_id": "CQj95SWJ3QM",
      "video_title": "Harke Haldar | ठाईलीको प्रवेश!! | 13 March 2020 (Ep 457)",
      "date_posted": "2020-03-13 12:30:05",
      "date_uploaded": "2020-03-13 04:15:11",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1834,
      "video_id": "-Byvf9eN1Xw",
      "video_title": "Bhadragol || Episode-247 || March-13-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-03-13 12:30:05",
      "date_uploaded": "2020-03-13 03:45:02",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1835,
      "video_id": "hyCKDczVZpA",
      "video_title": "COCA COLA PRESENTS NEPAL IDOL SEASON 3 | PERFORMANCE DAY | EPISODE 26 | AP1HD",
      "date_posted": "2020-03-14 12:52:43",
      "date_uploaded": "2020-03-13 03:00:10",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1836,
      "video_id": "Lm_T5odw4wQ",
      "video_title": "COCA COLA PRESENTS NEPAL IDOL SEASON 3 | GALA ROUND | ELIMINATION DAY | EPISODE 25 | AP1HD",
      "date_posted": "2020-03-14 12:52:43",
      "date_uploaded": "2020-03-12 03:00:11",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1832,
      "video_id": "Q9m4ObhBq24",
      "video_title": "Ulto Sulto || Episode-105 || March-11-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-03-11 12:12:37",
      "date_uploaded": "2020-03-11 03:09:10",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1831,
      "video_id": "OK2fQhh73As",
      "video_title": "Meri Bassai || Holi Special || Episode-645 || March-10-2020 || By Media Hub Official Channel",
      "date_posted": "2020-03-10 12:30:05",
      "date_uploaded": "2020-03-10 03:45:02",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1827,
      "video_id": "Km4Y8kVkzdo",
      "video_title": "Harke Haldar | हर्केले कुट्यो स्वास्नी | 6 March 2020 (Ep 456)",
      "date_posted": "2020-03-08 08:42:41",
      "date_uploaded": "2020-03-06 04:15:10",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1828,
      "video_id": "jAGquFtkCRc",
      "video_title": "Bhadragol || Episode-246 || March-06-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-03-08 08:42:41",
      "date_uploaded": "2020-03-06 03:45:00",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1829,
      "video_id": "QrK6LsfzeBU",
      "video_title": "COCA-COLA NEPAL PRESENTS NEPAL IDOL SEASON 3 | PERFORMANCE DAY | EPISODE 24 | AP1HD",
      "date_posted": "2020-03-08 08:45:30",
      "date_uploaded": "2020-03-06 03:00:10",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1830,
      "video_id": "j_XBC9yTnFI",
      "video_title": "COCA-COLA NEPAL PRESENTS NEPAL IDOL SEASON 3 | ELIMINATION DAY | EPISODE 23 | AP1HD",
      "date_posted": "2020-03-08 08:45:31",
      "date_uploaded": "2020-03-05 03:00:10",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1824,
      "video_id": "1AcmCURZOBY",
      "video_title": "Ulto Sulto || Episode-104 || March-04-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-03-05 12:30:04",
      "date_uploaded": "2020-03-04 02:45:01",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1826,
      "video_id": "uvDlWOVjfUs",
      "video_title": "Aayusha Gautam Vs Meri Bassai || Lok Dohori Battle || By Media Hub Official Channel",
      "date_posted": "2020-03-05 12:30:04",
      "date_uploaded": "2020-03-03 05:43:38",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1825,
      "video_id": "mywbAiRuUZ8",
      "video_title": "Meri Bassai || Episode-644 || Mar-03-2020 || By Media Hub Official Channel",
      "date_posted": "2020-03-05 12:30:04",
      "date_uploaded": "2020-03-03 03:45:01",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1821,
      "video_id": "w7qTAtxkZSU",
      "video_title": "HAPPY NEW YEAR | New Nepali Full Movie 2020/2076 | Ft. Kushal Thapa, Sandhya K.C",
      "date_posted": "2020-02-29 08:56:40",
      "date_uploaded": "2020-02-28 08:27:26",
      "cat_id": 1,
      "cat_name": "Movies"
    },
    {
      "vid": 1823,
      "video_id": "abnw4BjGiMY",
      "video_title": "Harke Haldar | ७० लाख काण्ड !! | 28 February 2020 (Ep 455)",
      "date_posted": "2020-03-05 12:30:03",
      "date_uploaded": "2020-02-28 04:00:12",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1820,
      "video_id": "MlSL4NEYYis",
      "video_title": "Bhadragol || Episode-245 || Feb-28-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-02-29 08:56:18",
      "date_uploaded": "2020-02-28 03:53:04",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1819,
      "video_id": "uetFxSrzkYs",
      "video_title": "Ulto Sulto || Episode-103 || Feb-27-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-02-26 12:42:12",
      "date_uploaded": "2020-02-26 02:45:01",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1817,
      "video_id": "zz_5ReMa-FY",
      "video_title": "Meri Bassai || Episode-643 || ft. Aayusha Gautam || Feb-25-2020 || By Media Hub Official Channel",
      "date_posted": "2020-02-26 12:33:10",
      "date_uploaded": "2020-02-25 03:45:01",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1816,
      "video_id": "cjFcfLxn2Wg",
      "video_title": "Harke Haldar | महाशिवरात्रि | 21 February 2020 (Ep 454)",
      "date_posted": "2020-02-26 12:33:09",
      "date_uploaded": "2020-02-21 04:00:12",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1818,
      "video_id": "vaxHbzicXHc",
      "video_title": "Bhadragol || Episode-244 || Feb-21-2020 || Shivaratri Special || By Media Hub Official Channel",
      "date_posted": "2020-02-26 12:33:10",
      "date_uploaded": "2020-02-21 03:45:01",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1815,
      "video_id": "eDIDB1edICs",
      "video_title": "Coca-Cola Nepal Presents NEPAL IDOL SEASON 3 | PERFORMANCE DAY | EPISODE 20 | AP1HD",
      "date_posted": "2020-02-22 10:43:48",
      "date_uploaded": "2020-02-21 03:30:30",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1822,
      "video_id": "v2OMUj8fYxI",
      "video_title": "New Generation(Naya Pidi) - Nepali Full Movie  - Shreedev Bhattrai, Anu Shah, Bikram Tamang",
      "date_posted": "2020-02-29 08:56:42",
      "date_uploaded": "2020-02-20 07:15:10",
      "cat_id": 1,
      "cat_name": "Movies"
    },
    {
      "vid": 1812,
      "video_id": "o5wwrbfL6yA",
      "video_title": "NEPAL IDOL SEASON 3 | ELIMINATION DAY | KARNA DAS | EPISODE 19 | AP1HD",
      "date_posted": "2020-02-21 06:18:04",
      "date_uploaded": "2020-02-20 02:45:10",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1813,
      "video_id": "rxxWqJd7ZYc",
      "video_title": "Ulto Sulto || Episode-102 || Feb-19-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-02-21 06:18:14",
      "date_uploaded": "2020-02-19 02:45:02",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1814,
      "video_id": "FfGZu0xN53U",
      "video_title": "Meri Bassai || Episode-642 || Feb-18-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-02-21 06:18:14",
      "date_uploaded": "2020-02-18 03:45:00",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1797,
      "video_id": "V-iJlDVAduY",
      "video_title": "Maute Dai | Nepali Full Movie | Ramesh Upreti | Jal Shah | Yuvraj Lama",
      "date_posted": "2020-02-17 10:56:41",
      "date_uploaded": "2020-02-16 04:44:47",
      "cat_id": 1,
      "cat_name": "Movies"
    },
    {
      "vid": 1798,
      "video_id": "zl8ccMj8gDk",
      "video_title": "Ziddi | Nepali Full Movie | Bhuwan KC | Karishma Manandhar | Harihar Sharma | Parash Kharel",
      "date_posted": "2020-02-17 10:56:42",
      "date_uploaded": "2020-02-14 05:10:56",
      "cat_id": 1,
      "cat_name": "Movies"
    },
    {
      "vid": 1811,
      "video_id": "Ee5PxRkqfc8",
      "video_title": "Harke Haldar | भ्यालेन्टाइन स्पेसल | 14 February 2020 (Ep 453)",
      "date_posted": "2020-02-17 10:58:04",
      "date_uploaded": "2020-02-14 04:00:10",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1789,
      "video_id": "BPKwBf7UHJo",
      "video_title": "Bhadragol || Episode-243 || Feb-14-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-02-15 08:31:21",
      "date_uploaded": "2020-02-14 03:45:00",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1790,
      "video_id": "YFfXtcU6Dgc",
      "video_title": "NEPAL IDOL SEASON 3 | PERFORMANCE DAY | EPISODE 18 | GALA ROUND | AP1HD",
      "date_posted": "2020-02-15 09:14:34",
      "date_uploaded": "2020-02-14 02:45:46",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1786,
      "video_id": "t9EjIcifBSU",
      "video_title": "Best Of Jigree (Kumar Kattel) | Part 8 | Comedy Video | Bhadragol",
      "date_posted": "2020-02-13 12:30:06",
      "date_uploaded": "2020-02-13 03:30:03",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1791,
      "video_id": "j1StFL_1Ws4",
      "video_title": "NEPAL IDOL SEASON 3 | VALENTINE'S DAY SPECIAL | EPISODE 17 | UDAY SOTANG AND MANILA SOTANG | AP1HD",
      "date_posted": "2020-02-15 09:14:34",
      "date_uploaded": "2020-02-13 02:45:10",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1787,
      "video_id": "3uJSYOBuRJQ",
      "video_title": "Ulto Sulto || Episode-101 || Feb-12-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-02-13 12:30:06",
      "date_uploaded": "2020-02-12 02:45:00",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1788,
      "video_id": "QF0KyXT3Zx8",
      "video_title": "Meri Bassai || Visit Nepal 2020 Special || Episode-641 || Feb-11-2020 || Comedy Video ||",
      "date_posted": "2020-02-13 12:30:07",
      "date_uploaded": "2020-02-11 03:45:00",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1785,
      "video_id": "DHRTfH5vudo",
      "video_title": "Kohi Ta Chha | Nepali Full Movie | Jharana Thapa | Raj Ballav Koirala",
      "date_posted": "2020-02-13 12:20:08",
      "date_uploaded": "2020-02-07 09:30:00",
      "cat_id": 1,
      "cat_name": "Movies"
    },
    {
      "vid": 1784,
      "video_id": "_wNiLhoe3pA",
      "video_title": "Harke Haldar | पात्ले गाँउमा स्कूटर ! | 07 February 2020 (Ep 452)",
      "date_posted": "2020-02-10 02:21:22",
      "date_uploaded": "2020-02-07 04:00:12",
      "cat_id": 3,
      "cat_name": "TV Shows"
    },
    {
      "vid": 1782,
      "video_id": "7pNDDjn4t8I",
      "video_title": "Bhadragol || Episode-242 || Feb-07-2020 || Comedy Video || By Media Hub Official Channel",
      "date_posted": "2020-02-08 12:40:27",
      "date_uploaded": "2020-02-07 03:45:01",
      "cat_id": 3,
      "cat_name": "TV Shows"
    }
  ];

DGrid('#grid1').Grid(columnDefs, rowData);