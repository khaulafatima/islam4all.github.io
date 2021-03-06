const _ = require('lodash');

let obj  = {
    "deebacha.mp3": {
        "key": "Deebacha",
        "title": "Deebacha",
        "file_name": "deebacha.mp3",
        "duration_in_sec": 1232,
        "duration_in_mili_sec": 1231543,
        "time": "00:20:31",
        "length_in_bytes": 7389385,
        "index": 1

    },
    "muqadma.mp3": {
        "key": "Muqadma",
        "title": "Muqadma",
        "file_name": "muqadma.mp3",
        "duration_in_sec": 3931,
        "duration_in_mili_sec": 3931416,
        "time": "01:05:31",
        "length_in_bytes": 15725890,
        "index": 2
    },
    "fateha_intro_.mp3": {
        "key": "Al-Fatihah",
        "title": "Surahe Al-Fatihah Introduction",
        "file_name": "fateha_intro_.mp3",
        "duration_in_sec": 231,
        "duration_in_mili_sec": 231210,
        "time": "00:03:51",
        "length_in_bytes": 1387387,
        "index": 3
    },
    "surahefateha.mp3": {
        "key": "Al-Fatihah",
        "title": "Surahe Al-Fatihah",
        "file_name": "surahefateha.mp3",
        "duration_in_sec": 534,
        "duration_in_mili_sec": 533708,
        "time": "00:08:53",
        "length_in_bytes": 3202375,
        "index": 4
    },
    "intro_albaqara_.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah Introduction",
        "file_name": "intro_albaqara_.mp3",
        "duration_in_sec": 619,
        "duration_in_mili_sec": 619285,
        "time": "00:10:19",
        "length_in_bytes": 3715837,
        "index": 5
    },
    "rukoo01baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo01baqara.mp3",
        "duration_in_sec": 729,
        "duration_in_mili_sec": 729182,
        "time": "00:12:09",
        "length_in_bytes": 4375283,
        "index": 6
    },
    "rukoo02baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo02baqara.mp3",
        "duration_in_sec": 723,
        "duration_in_mili_sec": 722651,
        "time": "00:12:02",
        "length_in_bytes": 4336037,
        "index": 7
    },
    "rukoo03baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo03baqara.mp3",
        "duration_in_sec": 937,
        "duration_in_mili_sec": 936803,
        "time": "00:15:36",
        "length_in_bytes": 5621011,
        "index": 8
    },
    "rukoo04baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo04baqara.mp3",
        "duration_in_sec": 1627,
        "duration_in_mili_sec": 1626593,
        "time": "00:27:06",
        "length_in_bytes": 9759684,
        "index": 9
    },
    "rukoo05baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo05baqara.mp3",
        "duration_in_sec": 825,
        "duration_in_mili_sec": 825078,
        "time": "00:13:45",
        "length_in_bytes": 4950593,
        "index": 10
    },
    "rukoo06baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo06baqara.mp3",
        "duration_in_sec": 870,
        "duration_in_mili_sec": 870165,
        "time": "00:14:30",
        "length_in_bytes": 5221180,
        "index": 11
    },
    "rukoo07baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo07baqara.mp3",
        "duration_in_sec": 540,
        "duration_in_mili_sec": 540395,
        "time": "00:09:00",
        "length_in_bytes": 3242562,
        "index": 12
    },
    "rukoo08baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo08baqara.mp3",
        "duration_in_sec": 610,
        "duration_in_mili_sec": 610403,
        "time": "00:10:10",
        "length_in_bytes": 3662548,
        "index": 13
    },
    "rukoo09baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo09baqara.mp3",
        "duration_in_sec": 774,
        "duration_in_mili_sec": 774374,
        "time": "00:12:54",
        "length_in_bytes": 4646371,
        "index": 14
    },
    "rukoo10baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo10baqara.mp3",
        "duration_in_sec": 322,
        "duration_in_mili_sec": 321620,
        "time": "00:05:21",
        "length_in_bytes": 1929846,
        "index": 15
    },
    "rukoo11baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo11baqara.mp3",
        "duration_in_sec": 753,
        "duration_in_mili_sec": 752901,
        "time": "00:12:32",
        "length_in_bytes": 4517535,
        "index": 16
    },
    "rukoo12baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo12baqara.mp3",
        "duration_in_sec": 664,
        "duration_in_mili_sec": 663589,
        "time": "00:11:03",
        "length_in_bytes": 3981722,
        "index": 17
    },
    "rukoo13baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo13baqara.mp3",
        "duration_in_sec": 659,
        "duration_in_mili_sec": 659017,
        "time": "00:10:59",
        "length_in_bytes": 3954231,
        "index": 18
    },
    "rukoo14baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo14baqara.mp3",
        "duration_in_sec": 620,
        "duration_in_mili_sec": 620173,
        "time": "00:10:20",
        "length_in_bytes": 3721166,
        "index": 19
    },
    "rukoo15baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo15baqara.mp3",
        "duration_in_sec": 913,
        "duration_in_mili_sec": 913162,
        "time": "00:15:13",
        "length_in_bytes": 5479166,
        "index": 20
    },
    "rukoo16baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo16baqara.mp3",
        "duration_in_sec": 982,
        "duration_in_mili_sec": 981969,
        "time": "00:16:21",
        "length_in_bytes": 5891942,
        "index": 21
    },
    "rukoo17baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo17baqara.mp3",
        "duration_in_sec": 953,
        "duration_in_mili_sec": 953443,
        "time": "00:15:53",
        "length_in_bytes": 5720851,
        "index": 22
    },
    "rukoo18baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo18baqara.mp3",
        "duration_in_sec": 332,
        "duration_in_mili_sec": 332251,
        "time": "00:05:32",
        "length_in_bytes": 1993637,
        "index": 23
    },
    "rukoo19baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo19baqara.mp3",
        "duration_in_sec": 768,
        "duration_in_mili_sec": 768496,
        "time": "00:12:48",
        "length_in_bytes": 4611106,
        "index": 24
    },
    "rukoo20baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo20baqara.mp3",
        "duration_in_sec": 459,
        "duration_in_mili_sec": 459442,
        "time": "00:07:39",
        "length_in_bytes": 2756841,
        "index": 25
    },
    "rukoo21baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo21baqara.mp3",
        "duration_in_sec": 640,
        "duration_in_mili_sec": 640131,
        "time": "00:10:40",
        "length_in_bytes": 3840912,
        "index": 26
    },
    "rukoo22baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo22baqara.mp3",
        "duration_in_sec": 735,
        "duration_in_mili_sec": 734877,
        "time": "00:12:14",
        "length_in_bytes": 4409388,
        "index": 27
    },
    "rukoo23baqara.mp3": {
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo23baqara.mp3",
        "duration_in_sec": 1211,
        "duration_in_mili_sec": 1211011,
        "time": "00:20:11",
        "length_in_bytes": 7266192,
        "index": 28
    },
    "rukoo24baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo24baqara.mp3",
        "duration_in_sec": 1168,
        "duration_in_mili_sec": 1168091,
        "time": "00:19:28",
        "length_in_bytes": 7008740,
        "index": 29
    },
    "rukoo25baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo25baqara.mp3",
        "duration_in_sec": 1027,
        "duration_in_mili_sec": 1027396,
        "time": "00:17:07",
        "length_in_bytes": 6164504,
        "index": 30
    },
    "rukoo26baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo26baqara.mp3",
        "duration_in_sec": 542,
        "duration_in_mili_sec": 541571,
        "time": "00:09:01",
        "length_in_bytes": 3249615,
        "index": 31
    },
    "rukoo27baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo27baqara.mp3",
        "duration_in_sec": 816,
        "duration_in_mili_sec": 815647,
        "time": "00:13:35",
        "length_in_bytes": 4894012,
        "index": 32
    },
    "rukoo28baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo28baqara.mp3",
        "duration_in_sec": 819,
        "duration_in_mili_sec": 819331,
        "time": "00:13:39",
        "length_in_bytes": 4916210,
        "index": 33
    },
    "rukoo29baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo29baqara.mp3",
        "duration_in_sec": 658,
        "duration_in_mili_sec": 658338,
        "time": "00:10:58",
        "length_in_bytes": 3950156,
        "index": 34
    },
    "rukoo30baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo30baqara.mp3",
        "duration_in_sec": 538,
        "duration_in_mili_sec": 538096,
        "time": "00:08:58",
        "length_in_bytes": 3228706,
        "index": 35
    },
    "rukoo31baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo31baqara.mp3",
        "duration_in_sec": 439,
        "duration_in_mili_sec": 438674,
        "time": "00:07:18",
        "length_in_bytes": 2632237,
        "index": 36
    },
    "rukoo32baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo32baqara.mp3",
        "duration_in_sec": 963,
        "duration_in_mili_sec": 963030,
        "time": "00:16:03",
        "length_in_bytes": 5778309,
        "index": 37
    },
    "rukoo33baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo33baqara.mp3",
        "duration_in_sec": 557,
        "duration_in_mili_sec": 556983,
        "time": "00:09:16",
        "length_in_bytes": 3342025,
        "index": 38
    },
    "rukoo34baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo34baqara.mp3",
        "duration_in_sec": 861,
        "duration_in_mili_sec": 861336,
        "time": "00:14:21",
        "length_in_bytes": 5168204,
        "index": 39
    },
    "rukoo35baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo35baqara.mp3",
        "duration_in_sec": 818,
        "duration_in_mili_sec": 817685,
        "time": "00:13:37",
        "length_in_bytes": 4906237,
        "index": 40
    },
    "rukoo36baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo36baqara.mp3",
        "duration_in_sec": 823,
        "duration_in_mili_sec": 822596,
        "time": "00:13:42",
        "length_in_bytes": 4935767,
        "index": 41
    },
    "rukoo37baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo37baqara.mp3",
        "duration_in_sec": 682,
        "duration_in_mili_sec": 681953,
        "time": "00:11:21",
        "length_in_bytes": 4091844,
        "index": 42
    },
    "rukoo38baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo38baqara.mp3",
        "duration_in_sec": 1614,
        "duration_in_mili_sec": 1613897,
        "time": "00:26:53",
        "length_in_bytes": 9683574,
        "index": 43
    },
    "rukoo39baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo39baqara.mp3",
        "duration_in_sec": 595,
        "duration_in_mili_sec": 594730,
        "time": "00:09:54",
        "length_in_bytes": 3568507,
        "index": 44
    },
    "rukoo40baqara.mp3": {
        "key": "Al-Baqarah",
        "title": "Surahe Al-Baqarah",
        "file_name": "rukoo40baqara.mp3",
        "duration_in_sec": 612,
        "duration_in_mili_sec": 612127,
        "time": "00:10:12",
        "length_in_bytes": 3672892,
        "index": 45
    },
    "intro_aaleimran_.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran Indrotuction",
        "file_name": "intro_aaleimran_.mp3",
        "duration_in_sec": 527,
        "duration_in_mili_sec": 527412,
        "time": "00:08:47",
        "length_in_bytes": 3164601,
        "index": 46
    },
    "rukoo01aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo01aaleimran.mp3",
        "duration_in_sec": 946,
        "duration_in_mili_sec": 945737,
        "time": "00:15:45",
        "length_in_bytes": 5674614,
        "index": 47
    },
    "rukoo02aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo02aaleimran.mp3",
        "duration_in_sec": 819,
        "duration_in_mili_sec": 818625,
        "time": "00:13:38",
        "length_in_bytes": 4911880,
        "index": 48
    },
    "rukoo03aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo03aaleimran.mp3",
        "duration_in_sec": 681,
        "duration_in_mili_sec": 680725,
        "time": "00:11:20",
        "length_in_bytes": 4084540,
        "index": 49
    },
    "rukoo04aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo04aaleimran.mp3",
        "duration_in_sec": 886,
        "duration_in_mili_sec": 885577,
        "time": "00:14:45",
        "length_in_bytes": 5313591,
        "index": 50
    },
    "rukoo05aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo05aaleimran.mp3",
        "duration_in_sec": 1178,
        "duration_in_mili_sec": 1177913,
        "time": "00:19:37",
        "length_in_bytes": 7067672,
        "index": 51
    },
    "rukoo06aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo06aaleimran.mp3",
        "duration_in_sec": 719,
        "duration_in_mili_sec": 719177,
        "time": "00:11:59",
        "length_in_bytes": 4315191,
        "index": 52
    },
    "rukoo07aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo07aaleimran.mp3",
        "duration_in_sec": 466,
        "duration_in_mili_sec": 466233,
        "time": "00:07:46",
        "length_in_bytes": 2797529,
        "index": 53
    },
    "rukoo08aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo08aaleimran.mp3",
        "duration_in_sec": 798,
        "duration_in_mili_sec": 798171,
        "time": "00:13:18",
        "length_in_bytes": 4789157,
        "index": 54
    },
    "rukoo09aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo09aaleimran.mp3",
        "duration_in_sec": 618,
        "duration_in_mili_sec": 617509,
        "time": "00:10:17",
        "length_in_bytes": 3705179,
        "index": 55
    },
    "rukoo10aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo10aaleimran.mp3",
        "duration_in_sec": 705,
        "duration_in_mili_sec": 704601,
        "time": "00:11:44",
        "length_in_bytes": 4227796,
        "index": 56
    },
    "rukoo11aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",

        "file_name": "rukoo11aaleimran.mp3",
        "duration_in_sec": 479,
        "duration_in_mili_sec": 478903,
        "time": "00:07:58",
        "length_in_bytes": 2873545,
        "index": 57
    },
    "rukoo12aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo12aaleimran.mp3",
        "duration_in_sec": 846,
        "duration_in_mili_sec": 845793,
        "time": "00:14:05",
        "length_in_bytes": 5074884,
        "index": 58
    },
    "rukoo13aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo13aaleimran.mp3",
        "duration_in_sec": 618,
        "duration_in_mili_sec": 617535,
        "time": "00:10:17",
        "length_in_bytes": 3705336,
        "index": 59
    },
    "rukoo14aaleimran.mp3": {
        "key": "Aale-Imran",
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo14aaleimran.mp3",
        "duration_in_sec": 547,
        "duration_in_mili_sec": 547030,
        "time": "00:09:07",
        "length_in_bytes": 3282309,
        "index": 60
    },
    "rukoo15aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo15aaleimran.mp3",
        "duration_in_sec": 447,
        "duration_in_mili_sec": 446589,
        "time": "00:07:26",
        "length_in_bytes": 2679664,
        "index": 61
    },
    "rukoo16aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo16aaleimran.mp3",
        "duration_in_sec": 615,
        "duration_in_mili_sec": 614713,
        "time": "00:10:14",
        "length_in_bytes": 3688472,
        "index": 62
    },
    "rukoo17aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo17aaleimran.mp3",
        "duration_in_sec": 892,
        "duration_in_mili_sec": 891820,
        "time": "00:14:51",
        "length_in_bytes": 5351050,
        "index": 63
    },
    "rukoo18aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo18aaleimran.mp3",
        "duration_in_sec": 609,
        "duration_in_mili_sec": 608653,
        "time": "00:10:08",
        "length_in_bytes": 3652046,
        "index": 64
    },
    "rukoo19aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo19aaleimran.mp3",
        "duration_in_sec": 737,
        "duration_in_mili_sec": 736522,
        "time": "00:12:16",
        "length_in_bytes": 4419263,
        "index": 65
    },
    "rukoo20aaleimran.mp3": {
        "key": "Aale-Imran",
        "title": "Surahe Aale Imran",
        "file_name": "rukoo20aaleimran.mp3",
        "duration_in_sec": 645,
        "duration_in_mili_sec": 644833,
        "time": "00:10:44",
        "length_in_bytes": 3869124,
        "index": 66
    },
    "intro_an-nisa_.mp3": {
        "key": "An-Nisa",
        "title": "Surahe An-Nisa Introduction",
        "file_name": "intro_an-nisa_.mp3",
        "duration_in_sec": 475,
        "duration_in_mili_sec": 474619,
        "time": "00:07:54",
        "length_in_bytes": 2847904,
        "index": 67
    },
    "rukoo01an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo01an-nisa.mp3",
        "duration_in_sec": 1257,
        "duration_in_mili_sec": 1257352,
        "time": "00:20:57",
        "length_in_bytes": 7544239,
        "index": 68
    },
    "rukoo02an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo02an-nisa.mp3",
        "duration_in_sec": 975,
        "duration_in_mili_sec": 975099,
        "time": "00:16:15",
        "length_in_bytes": 5850721,
        "index": 69
    },
    "rukoo03an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo03an-nisa.mp3",
        "duration_in_sec": 907,
        "duration_in_mili_sec": 907076,
        "time": "00:15:07",
        "length_in_bytes": 5442647,
        "index": 70
    },
    "rukoo04an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo04an-nisa.mp3",
        "duration_in_sec": 1331,
        "duration_in_mili_sec": 1330651,
        "time": "00:22:10",
        "length_in_bytes": 7984135,
        "index": 71
    },
    "rukoo05an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo05an-nisa.mp3",
        "duration_in_sec": 982,
        "duration_in_mili_sec": 981525,
        "time": "00:16:21",
        "length_in_bytes": 5889340,
        "index": 72
    },
    "rukoo06an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo06an-nisa.mp3",
        "duration_in_sec": 866,
        "duration_in_mili_sec": 866220,
        "time": "00:14:26",
        "length_in_bytes": 5197450,
        "index": 73
    },
    "rukoo07an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo07an-nisa.mp3",
        "duration_in_sec": 1010,
        "duration_in_mili_sec": 1009946,
        "time": "00:16:49",
        "length_in_bytes": 6059868,
        "index": 74
    },
    "rukoo08an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo08an-nisa.mp3",
        "duration_in_sec": 1183,
        "duration_in_mili_sec": 1182903,
        "time": "00:19:42",
        "length_in_bytes": 7097545,
        "index": 75
    },
    "rukoo09an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo09an-nisa.mp3",
        "duration_in_sec": 806,
        "duration_in_mili_sec": 805930,
        "time": "00:13:25",
        "length_in_bytes": 4835770,
        "index": 76
    },
    "rukoo10an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo10an-nisa.mp3",
        "duration_in_sec": 394,
        "duration_in_mili_sec": 394449,
        "time": "00:06:34",
        "length_in_bytes": 2366822,
        "index": 77
    },
    "rukoo11an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo11an-nisa.mp3",
        "duration_in_sec": 941,
        "duration_in_mili_sec": 941009,
        "time": "00:15:41",
        "length_in_bytes": 5646245,
        "index": 78
    },
    "rukoo12an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo12an-nisa.mp3",
        "duration_in_sec": 496,
        "duration_in_mili_sec": 496065,
        "time": "00:08:16",
        "length_in_bytes": 2976520,
        "index": 79
    },
    "rukoo13an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo13an-nisa.mp3",
        "duration_in_sec": 792,
        "duration_in_mili_sec": 791641,
        "time": "00:13:11",
        "length_in_bytes": 4749973,
        "index": 80
    },
    "rukoo14an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo14an-nisa.mp3",
        "duration_in_sec": 331,
        "duration_in_mili_sec": 330762,
        "time": "00:05:30",
        "length_in_bytes": 1984703,
        "index": 81
    },
    "rukoo15an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo15an-nisa.mp3",
        "duration_in_sec": 1011,
        "duration_in_mili_sec": 1011174,
        "time": "00:16:51",
        "length_in_bytes": 6067171,
        "index": 82
    },
    "rukoo16an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo16an-nisa.mp3",
        "duration_in_sec": 409,
        "duration_in_mili_sec": 409025,
        "time": "00:06:49",
        "length_in_bytes": 2454280,
        "index": 83
    },
    "rukoo17an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo17an-nisa.mp3",
        "duration_in_sec": 244,
        "duration_in_mili_sec": 244219,
        "time": "00:04:04",
        "length_in_bytes": 1465441,
        "index": 84
    },
    "rukoo18an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo18an-nisa.mp3",
        "duration_in_sec": 631,
        "duration_in_mili_sec": 630883,
        "time": "00:10:30",
        "length_in_bytes": 3785428,
        "index": 85
    },
    "rukoo19an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo19an-nisa.mp3",
        "duration_in_sec": 964,
        "duration_in_mili_sec": 964180,
        "time": "00:16:04",
        "length_in_bytes": 5785206,
        "index": 86
    },
    "rukoo20an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo20an-nisa.mp3",
        "duration_in_sec": 681,
        "duration_in_mili_sec": 680516,
        "time": "00:11:20",
        "length_in_bytes": 4083287,
        "index": 87
    },
    "rukoo21an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo21an-nisa.mp3",
        "duration_in_sec": 861,
        "duration_in_mili_sec": 860552,
        "time": "00:14:20",
        "length_in_bytes": 5163439,
        "index": 88
    },
    "rukoo22an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo22an-nisa.mp3",
        "duration_in_sec": 1690,
        "duration_in_mili_sec": 1689913,
        "time": "00:28:09",
        "length_in_bytes": 10139672,
        "index": 89
    },
    "rukoo23an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo23an-nisa.mp3",
        "duration_in_sec": 1098,
        "duration_in_mili_sec": 1097509,
        "time": "00:18:17",
        "length_in_bytes": 6585242,
        "index": 90
    },
    "rukoo24an-nisa.mp3": {
        "key": "An-Nisa",

        "title": "Surahe An-Nisa",
        "file_name": "rukoo24an-nisa.mp3",
        "duration_in_sec": 393,
        "duration_in_mili_sec": 393273,
        "time": "00:06:33",
        "length_in_bytes": 2359769,
        "index": 91
    },
    "intro_al-maida_.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida Introduction",
        "file_name": "intro_al-maida_.mp3",
        "duration_in_sec": 1151,
        "duration_in_mili_sec": 1151086,
        "time": "00:19:11",
        "length_in_bytes": 6906705,
        "index": 92
    },
    "rukoo01al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",
        "file_name": "rukoo01al-maida.mp3",
        "duration_in_sec": 2079,
        "duration_in_mili_sec": 2078772,
        "time": "00:34:38",
        "length_in_bytes": 12472824,
        "index": 93
    },
    "rukoo02al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo02al-maida.mp3",
        "duration_in_sec": 493,
        "duration_in_mili_sec": 492878,
        "time": "00:08:12",
        "length_in_bytes": 2957398,
        "index": 94
    },
    "rukoo03al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo03al-maida.mp3",
        "duration_in_sec": 1582,
        "duration_in_mili_sec": 1582367,
        "time": "00:26:22",
        "length_in_bytes": 9494395,
        "index": 95
    },
    "rukoo04al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo04al-maida.mp3",
        "duration_in_sec": 551,
        "duration_in_mili_sec": 550531,
        "time": "00:09:10",
        "length_in_bytes": 3303312,
        "index": 96
    },
    "rukoo05al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo05al-maida.mp3",
        "duration_in_sec": 863,
        "duration_in_mili_sec": 863269,
        "time": "00:14:23",
        "length_in_bytes": 5179802,
        "index": 97
    },
    "rukoo06al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo06al-maida.mp3",
        "duration_in_sec": 1341,
        "duration_in_mili_sec": 1341362,
        "time": "00:22:21",
        "length_in_bytes": 8048298,
        "index": 98
    },
    "rukoo07al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo07al-maida.mp3",
        "duration_in_sec": 1214,
        "duration_in_mili_sec": 1214145,
        "time": "00:20:14",
        "length_in_bytes": 7285000,
        "index": 99
    },
    "rukoo08al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo08al-maida.mp3",
        "duration_in_sec": 505,
        "duration_in_mili_sec": 505287,
        "time": "00:08:25",
        "length_in_bytes": 3031847,
        "index": 100
    },
    "rukoo09al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo09al-maida.mp3",
        "duration_in_sec": 718,
        "duration_in_mili_sec": 718237,
        "time": "00:11:58",
        "length_in_bytes": 4309646,
        "index": 101
    },
    "rukoo10al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo10al-maida.mp3",
        "duration_in_sec": 1476,
        "duration_in_mili_sec": 1476258,
        "time": "00:24:36",
        "length_in_bytes": 8857739,
        "index": 102
    },
    "rukoo11al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo11al-maida.mp3",
        "duration_in_sec": 417,
        "duration_in_mili_sec": 417306,
        "time": "00:06:57",
        "length_in_bytes": 2503965,
        "index": 103
    },
    "rukoo12al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo12al-maida.mp3",
        "duration_in_sec": 965,
        "duration_in_mili_sec": 964963,
        "time": "00:16:04",
        "length_in_bytes": 5789908,
        "index": 104
    },
    "rukoo13al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo13al-maida.mp3",
        "duration_in_sec": 614,
        "duration_in_mili_sec": 613642,
        "time": "00:10:13",
        "length_in_bytes": 3682046,
        "index": 105
    },
    "rukoo14al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo14al-maida.mp3",
        "duration_in_sec": 882,
        "duration_in_mili_sec": 881580,
        "time": "00:14:41",
        "length_in_bytes": 5289610,
        "index": 106
    },
    "rukoo15al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo15al-maida.mp3",
        "duration_in_sec": 534,
        "duration_in_mili_sec": 533891,
        "time": "00:08:53",
        "length_in_bytes": 3203472,
        "index": 107
    },
    "rukoo16al-maida.mp3": {
        "key": "Al-Maida",

        "title": "Surahe Al-Maida",

        "file_name": "rukoo16al-maida.mp3",
        "duration_in_sec": 380,
        "duration_in_mili_sec": 380160,
        "time": "00:06:20",
        "length_in_bytes": 2281088,
        "index": 108
    },
    "intro_alanaam_.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam Introduction",

        "file_name": "intro_alanaam_.mp3",
        "duration_in_sec": 603,
        "duration_in_mili_sec": 602854,
        "time": "00:10:02",
        "length_in_bytes": 3617251,
        "index": 109
    },
    "rukoo01alanaam.mp3": {
        "title": "Surahe Al-Anaam",

        "file_name": "rukoo01alanaam.mp3",
        "duration_in_sec": 607,
        "duration_in_mili_sec": 606877,
        "time": "00:10:06",
        "length_in_bytes": 3641388,
        "index": 110
    },
    "rukoo02alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo02alanaam.mp3",
        "duration_in_sec": 533,
        "duration_in_mili_sec": 532976,
        "time": "00:08:52",
        "length_in_bytes": 3197986,
        "index": 111
    },
    "rukoo03alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo03alanaam.mp3",
        "duration_in_sec": 613,
        "duration_in_mili_sec": 612885,
        "time": "00:10:12",
        "length_in_bytes": 3677437,
        "index": 112
    },
    "rukoo04alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo04alanaam.mp3",
        "duration_in_sec": 1337,
        "duration_in_mili_sec": 1337443,
        "time": "00:22:17",
        "length_in_bytes": 8024851,
        "index": 113
    },
    "rukoo05alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo05alanaam.mp3",
        "duration_in_sec": 475,
        "duration_in_mili_sec": 475324,
        "time": "00:07:55",
        "length_in_bytes": 2852072,
        "index": 114
    },
    "rukoo06alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo06alanaam.mp3",
        "duration_in_sec": 460,
        "duration_in_mili_sec": 460095,
        "time": "00:07:40",
        "length_in_bytes": 2760696,
        "index": 115
    },
    "rukoo07alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo07alanaam.mp3",
        "duration_in_sec": 282,
        "duration_in_mili_sec": 281704,
        "time": "00:04:41",
        "length_in_bytes": 1690355,
        "index": 116
    },
    "rukoo08alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo08alanaam.mp3",
        "duration_in_sec": 606,
        "duration_in_mili_sec": 606459,
        "time": "00:10:06",
        "length_in_bytes": 3638881,
        "index": 117
    },
    "rukoo09alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo09alanaam.mp3",
        "duration_in_sec": 1878,
        "duration_in_mili_sec": 1878491,
        "time": "00:31:18",
        "length_in_bytes": 11271140,
        "index": 118
    },
    "rukoo10alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo10alanaam.mp3",
        "duration_in_sec": 354,
        "duration_in_mili_sec": 353985,
        "time": "00:05:53",
        "length_in_bytes": 2124040,
        "index": 119
    },
    "rukoo11alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo11alanaam.mp3",
        "duration_in_sec": 627,
        "duration_in_mili_sec": 626678,
        "time": "00:10:26",
        "length_in_bytes": 3760193,
        "index": 120
    },
    "rukoo12alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo12alanaam.mp3",
        "duration_in_sec": 445,
        "duration_in_mili_sec": 445492,
        "time": "00:07:25",
        "length_in_bytes": 2673081,
        "index": 121
    },
    "rukoo13alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo13alanaam.mp3",
        "duration_in_sec": 721,
        "duration_in_mili_sec": 721110,
        "time": "00:12:01",
        "length_in_bytes": 4326789,
        "index": 122
    },
    "rukoo14alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo14alanaam.mp3",
        "duration_in_sec": 1051,
        "duration_in_mili_sec": 1051063,
        "time": "00:17:31",
        "length_in_bytes": 6306505,
        "index": 123
    },
    "rukoo15alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo15alanaam.mp3",
        "duration_in_sec": 586,
        "duration_in_mili_sec": 585535,
        "time": "00:09:45",
        "length_in_bytes": 3513336,
        "index": 124
    },
    "rukoo16alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo16alanaam.mp3",
        "duration_in_sec": 1515,
        "duration_in_mili_sec": 1514971,
        "time": "00:25:14",
        "length_in_bytes": 9089957,
        "index": 125
    },
    "rukoo17alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo17alanaam.mp3",
        "duration_in_sec": 432,
        "duration_in_mili_sec": 432457,
        "time": "00:07:12",
        "length_in_bytes": 2594871,
        "index": 126
    },
    "rukoo18alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo18alanaam.mp3",
        "duration_in_sec": 1006,
        "duration_in_mili_sec": 1006498,
        "time": "00:16:46",
        "length_in_bytes": 6039116,
        "index": 127
    },
    "rukoo19alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo19alanaam.mp3",
        "duration_in_sec": 811,
        "duration_in_mili_sec": 811442,
        "time": "00:13:31",
        "length_in_bytes": 4868778,
        "index": 128
    },
    "rukoo20alanaam.mp3": {
        "key": "Al-Anaam",

        "title": "Surahe Al-Anaam",

        "file_name": "rukoo20alanaam.mp3",
        "duration_in_sec": 836,
        "duration_in_mili_sec": 835840,
        "time": "00:13:55",
        "length_in_bytes": 5015168,
        "index": 129
    },
    "intro_al-aaraf_.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf Introduction",
        "file_name": "intro_al-aaraf_.mp3",
        "duration_in_sec": 191,
        "duration_in_mili_sec": 190694,
        "time": "00:03:10",
        "length_in_bytes": 1144291,
        "index": 130
    },
    "rukoo01alaaraf.mp3": {
        "key": "Al-Aaraf",
        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo01alaaraf.mp3",
        "duration_in_sec": 861,
        "duration_in_mili_sec": 860578,
        "time": "00:14:20",
        "length_in_bytes": 5163596,
        "index": 131
    },
    "rukoo02alaaraf.mp3": {
        "key": "Al-Aaraf",
        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo02alaaraf.mp3",
        "duration_in_sec": 1442,
        "duration_in_mili_sec": 1441672,
        "time": "00:24:01",
        "length_in_bytes": 8650222,
        "index": 132
    },
    "rukoo03alaaraf.mp3": {
        "key": "Al-Aaraf",
        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo03alaaraf.mp3",
        "duration_in_sec": 813,
        "duration_in_mili_sec": 813349,
        "time": "00:13:33",
        "length_in_bytes": 4880219,
        "index": 133
    },
    "rukoo04alaaraf.mp3": {
        "key": "Al-Aaraf",
        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo04alaaraf.mp3",
        "duration_in_sec": 1276,
        "duration_in_mili_sec": 1275847,
        "time": "00:21:15",
        "length_in_bytes": 7655270,
        "index": 134
    },
    "rukoo05alaaraf.mp3": {
        "key": "Al-Aaraf",
        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo05alaaraf.mp3",
        "duration_in_sec": 556,
        "duration_in_mili_sec": 555703,
        "time": "00:09:15",
        "length_in_bytes": 3334345,
        "index": 135
    },
    "rukoo06alaaraf.mp3": {
        "key": "Al-Aaraf",
        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo06alaaraf.mp3",
        "duration_in_sec": 519,
        "duration_in_mili_sec": 518949,
        "time": "00:08:38",
        "length_in_bytes": 3113882,
        "index": 136
    },
    "rukoo07alaaraf.mp3": {
        "key": "Al-Aaraf",
        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo07alaaraf.mp3",
        "duration_in_sec": 874,
        "duration_in_mili_sec": 873587,
        "time": "00:14:33",
        "length_in_bytes": 5241650,
        "index": 137
    },
    "rukoo08alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo08alaaraf.mp3",
        "duration_in_sec": 726,
        "duration_in_mili_sec": 725891,
        "time": "00:12:05",
        "length_in_bytes": 4355472,
        "index": 138
    },
    "rukoo09alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo09alaaraf.mp3",
        "duration_in_sec": 642,
        "duration_in_mili_sec": 641855,
        "time": "00:10:41",
        "length_in_bytes": 3851256,
        "index": 139
    },
    "rukoo10alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo10alaaraf.mp3",
        "duration_in_sec": 1303,
        "duration_in_mili_sec": 1302936,
        "time": "00:21:42",
        "length_in_bytes": 7817804,
        "index": 140
    },
    "rukoo11alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo11alaaraf.mp3",
        "duration_in_sec": 855,
        "duration_in_mili_sec": 855040,
        "time": "00:14:15",
        "length_in_bytes": 5130431,
        "index": 141
    },
    "rukoo12alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo12alaaraf.mp3",
        "duration_in_sec": 489,
        "duration_in_mili_sec": 489195,
        "time": "00:08:09",
        "length_in_bytes": 2935299,
        "index": 142
    },
    "rukoo13alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo13alaaraf.mp3",
        "duration_in_sec": 929,
        "duration_in_mili_sec": 928836,
        "time": "00:15:28",
        "length_in_bytes": 5573207,
        "index": 143
    },
    "rukoo14alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo14alaaraf.mp3",
        "duration_in_sec": 810,
        "duration_in_mili_sec": 809953,
        "time": "00:13:29",
        "length_in_bytes": 4859844,
        "index": 144
    },
    "rukoo15alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo15alaaraf.mp3",
        "duration_in_sec": 180,
        "duration_in_mili_sec": 179853,
        "time": "00:02:59",
        "length_in_bytes": 1079246,
        "index": 145
    },
    "rukoo16alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo16alaaraf.mp3",
        "duration_in_sec": 704,
        "duration_in_mili_sec": 704000,
        "time": "00:11:44",
        "length_in_bytes": 4224128,
        "index": 146
    },
    "rukoo17alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo17alaaraf.mp3",
        "duration_in_sec": 676,
        "duration_in_mili_sec": 676023,
        "time": "00:11:16",
        "length_in_bytes": 4056265,
        "index": 147
    },
    "rukoo18alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo18alaaraf.mp3",
        "duration_in_sec": 432,
        "duration_in_mili_sec": 432353,
        "time": "00:07:12",
        "length_in_bytes": 2594244,
        "index": 148
    },
    "rukoo19alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo19alaaraf.mp3",
        "duration_in_sec": 683,
        "duration_in_mili_sec": 683076,
        "time": "00:11:23",
        "length_in_bytes": 4098584,
        "index": 149
    },
    "rukoo20alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo20alaaraf.mp3",
        "duration_in_sec": 556,
        "duration_in_mili_sec": 556016,
        "time": "00:09:16",
        "length_in_bytes": 3336226,
        "index": 150
    },
    "rukoo21alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo21alaaraf.mp3",
        "duration_in_sec": 1140,
        "duration_in_mili_sec": 1140114,
        "time": "00:19:00",
        "length_in_bytes": 6840877,
        "index": 151
    },
    "rukoo22alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo22alaaraf.mp3",
        "duration_in_sec": 1560,
        "duration_in_mili_sec": 1560320,
        "time": "00:26:00",
        "length_in_bytes": 9362111,
        "index": 152
    },
    "rukoo23alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo23alaaraf.mp3",
        "duration_in_sec": 398,
        "duration_in_mili_sec": 397871,
        "time": "00:06:37",
        "length_in_bytes": 2387354,
        "index": 153
    },
    "rukoo24alaaraf.mp3": {
        "key": "Al-Aaraf",

        "title": "Surahe Al-Aaraf",
        "file_name": "rukoo24alaaraf.mp3",
        "duration_in_sec": 1841,
        "duration_in_mili_sec": 1840588,
        "time": "00:30:40",
        "length_in_bytes": 11043718,
        "index": 154
    },
    "intro_al-anfal_.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal Introduction",
        "file_name": "intro_al-anfal_.mp3",
        "duration_in_sec": 1750,
        "duration_in_mili_sec": 1750178,
        "time": "00:29:10",
        "length_in_bytes": 10501259,
        "index": 155
    },
    "rukoo01alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo01alanfal.mp3",
        "duration_in_sec": 971,
        "duration_in_mili_sec": 971259,
        "time": "00:16:11",
        "length_in_bytes": 5827681,
        "index": 156
    },
    "rukoo02alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo02alanfal.mp3",
        "duration_in_sec": 612,
        "duration_in_mili_sec": 611605,
        "time": "00:10:11",
        "length_in_bytes": 3669757,
        "index": 157
    },
    "rukoo03alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo03alanfal.mp3",
        "duration_in_sec": 694,
        "duration_in_mili_sec": 693969,
        "time": "00:11:33",
        "length_in_bytes": 4163942,
        "index": 158
    },
    "rukoo04alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo04alanfal.mp3",
        "duration_in_sec": 787,
        "duration_in_mili_sec": 786782,
        "time": "00:13:06",
        "length_in_bytes": 4720883,
        "index": 159
    },
    "rukoo05alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo05alanfal.mp3",
        "duration_in_sec": 617,
        "duration_in_mili_sec": 616568,
        "time": "00:10:16",
        "length_in_bytes": 3699537,
        "index": 160
    },
    "rukoo06alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo06alanfal.mp3",
        "duration_in_sec": 430,
        "duration_in_mili_sec": 429505,
        "time": "00:07:09",
        "length_in_bytes": 2577160,
        "index": 161
    },
    "rukoo07alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo07alanfal.mp3",
        "duration_in_sec": 975,
        "duration_in_mili_sec": 974994,
        "time": "00:16:14",
        "length_in_bytes": 5850157,
        "index": 162
    },
    "rukoo08alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo08alanfal.mp3",
        "duration_in_sec": 369,
        "duration_in_mili_sec": 369162,
        "time": "00:06:09",
        "length_in_bytes": 2215103,
        "index": 163
    },
    "rukoo09alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo09alanfal.mp3",
        "duration_in_sec": 604,
        "duration_in_mili_sec": 604212,
        "time": "00:10:04",
        "length_in_bytes": 3625401,
        "index": 164
    },
    "rukoo10alanfal.mp3": {
        "key": "Al-Anfal",

        "title": "Surahe Al-Anfal ",
        "file_name": "rukoo10alanfal.mp3",
        "duration_in_sec": 693,
        "duration_in_mili_sec": 692506,
        "time": "00:11:32",
        "length_in_bytes": 4155228,
        "index": 165
    },
    "intro_at-tauba_.mp3": {
        "key": "Al-Tawbah",

        "title": "Surahe At-Tawbah Introduction",
        "file_name": "intro_at-tauba_.mp3",
        "duration_in_sec": 1427,
        "duration_in_mili_sec": 1427252,
        "time": "00:23:47",
        "length_in_bytes": 8563641,
        "index": 166
    },
    "rukoo01tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo01tauba.mp3",
        "duration_in_sec": 738,
        "duration_in_mili_sec": 738377,
        "time": "00:12:18",
        "length_in_bytes": 4430391,
        "index": 167
    },
    "rukoo02tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo02tauba.mp3",
        "duration_in_sec": 859,
        "duration_in_mili_sec": 859324,
        "time": "00:14:19",
        "length_in_bytes": 5156072,
        "index": 168
    },
    "rukoo03tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo03tauba.mp3",
        "duration_in_sec": 516,
        "duration_in_mili_sec": 515657,
        "time": "00:08:35",
        "length_in_bytes": 3094134,
        "index": 169
    },
    "rukoo04tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo04tauba.mp3",
        "duration_in_sec": 698,
        "duration_in_mili_sec": 698488,
        "time": "00:11:38",
        "length_in_bytes": 4191120,
        "index": 170
    },
    "rukoo05tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo05tauba.mp3",
        "duration_in_sec": 972,
        "duration_in_mili_sec": 971651,
        "time": "00:16:11",
        "length_in_bytes": 5830095,
        "index": 171
    },
    "rukoo06tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo06tauba.mp3",
        "duration_in_sec": 536,
        "duration_in_mili_sec": 535589,
        "time": "00:08:55",
        "length_in_bytes": 3213659,
        "index": 172
    },
    "rukoo07tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo07tauba.mp3",
        "duration_in_sec": 1497,
        "duration_in_mili_sec": 1496764,
        "time": "00:24:56",
        "length_in_bytes": 8980775,
        "index": 173
    },
    "rukoo08tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo08tauba.mp3",
        "duration_in_sec": 1276,
        "duration_in_mili_sec": 1275847,
        "time": "00:21:15",
        "length_in_bytes": 7655207,
        "index": 174
    },
    "rukoo09tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo09tauba.mp3",
        "duration_in_sec": 618,
        "duration_in_mili_sec": 617770,
        "time": "00:10:17",
        "length_in_bytes": 3706747,
        "index": 175
    },
    "rukoo10tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo10tauba.mp3",
        "duration_in_sec": 832,
        "duration_in_mili_sec": 831660,
        "time": "00:13:51",
        "length_in_bytes": 4990090,
        "index": 176
    },
    "rukoo11tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo11tauba.mp3",
        "duration_in_sec": 481,
        "duration_in_mili_sec": 480601,
        "time": "00:08:00",
        "length_in_bytes": 2883796,
        "index": 177
    },
    "rukoo12tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo12tauba.mp3",
        "duration_in_sec": 1037,
        "duration_in_mili_sec": 1036513,
        "time": "00:17:16",
        "length_in_bytes": 6219204,
        "index": 178
    },
    "rukoo13tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo13tauba.mp3",
        "duration_in_sec": 1434,
        "duration_in_mili_sec": 1434358,
        "time": "00:23:54",
        "length_in_bytes": 8606336,
        "index": 179
    },
    "rukoo14tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo14tauba.mp3",
        "duration_in_sec": 3000,
        "duration_in_mili_sec": 3000189,
        "time": "00:50:00",
        "length_in_bytes": 18001362,
        "index": 180
    },
    "rukoo15tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo15tauba.mp3",
        "duration_in_sec": 548,
        "duration_in_mili_sec": 548232,
        "time": "00:09:08",
        "length_in_bytes": 3289519,
        "index": 181
    },
    "rukoo16tauba.mp3": {
        "key": "Al-Tawbah",
        "title": "Surahe At-Tawbah",
        "file_name": "rukoo16tauba.mp3",
        "duration_in_sec": 603,
        "duration_in_mili_sec": 603350,
        "time": "00:10:03",
        "length_in_bytes": 3620229,
        "index": 182
    },
    "intro_younus_.mp3": {
        "key": "Younus",
        "title": "Surahe Younus Intoduction",
        "file_name": "intro_younus_.mp3",
        "duration_in_sec": 485,
        "duration_in_mili_sec": 484624,
        "time": "00:08:04",
        "length_in_bytes": 2907933,
        "index": 183
    },
    "rukoo01younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",
        "file_name": "rukoo01younus.mp3",
        "duration_in_sec": 1729,
        "duration_in_mili_sec": 1729489,
        "time": "00:28:49",
        "length_in_bytes": 10377062,
        "index": 184
    },
    "rukoo02younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo02younus.mp3",
        "duration_in_sec": 1673,
        "duration_in_mili_sec": 1673300,
        "time": "00:27:53",
        "length_in_bytes": 10039926,
        "index": 185
    },
    "rukoo03younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo03younus.mp3",
        "duration_in_sec": 860,
        "duration_in_mili_sec": 860134,
        "time": "00:14:20",
        "length_in_bytes": 5160994,
        "index": 186
    },
    "rukoo04younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo04younus.mp3",
        "duration_in_sec": 1076,
        "duration_in_mili_sec": 1076114,
        "time": "00:17:56",
        "length_in_bytes": 6456814,
        "index": 187
    },
    "rukoo05younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo05younus.mp3",
        "duration_in_sec": 833,
        "duration_in_mili_sec": 833176,
        "time": "00:13:53",
        "length_in_bytes": 4999181,
        "index": 188
    },
    "rukoo06younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo06younus.mp3",
        "duration_in_sec": 616,
        "duration_in_mili_sec": 615784,
        "time": "00:10:15",
        "length_in_bytes": 3694835,
        "index": 189
    },
    "rukoo07younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo07younus.mp3",
        "duration_in_sec": 937,
        "duration_in_mili_sec": 937064,
        "time": "00:15:37",
        "length_in_bytes": 5622578,
        "index": 190
    },
    "rukoo08younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo08younus.mp3",
        "duration_in_sec": 892,
        "duration_in_mili_sec": 892212,
        "time": "00:14:52",
        "length_in_bytes": 5353401,
        "index": 191
    },
    "rukoo09younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo09younus.mp3",
        "duration_in_sec": 1269,
        "duration_in_mili_sec": 1268558,
        "time": "00:21:08",
        "length_in_bytes": 7611541,
        "index": 192
    },
    "rukoo10younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo10younus.mp3",
        "duration_in_sec": 991,
        "duration_in_mili_sec": 990642,
        "time": "00:16:30",
        "length_in_bytes": 5944041,
        "index": 193
    },
    "rukoo11younus.mp3": {
        "key": "Younus",

        "title": "Surahe Younus",

        "file_name": "rukoo11younus.mp3",
        "duration_in_sec": 652,
        "duration_in_mili_sec": 651886,
        "time": "00:10:51",
        "length_in_bytes": 3911442,
        "index": 194
    },
    "intro_huud_.mp3": {
        "key": "Huud",

        "title": "Surahe Huud Introduction",
        "file_name": "intro_huud_.mp3",
        "duration_in_sec": 260,
        "duration_in_mili_sec": 259892,
        "time": "00:04:19",
        "length_in_bytes": 1559481,
        "index": 195
    },
    "rukoo01huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",
        "file_name": "rukoo01huud.mp3",
        "duration_in_sec": 813,
        "duration_in_mili_sec": 813453,
        "time": "00:13:33",
        "length_in_bytes": 4880846,
        "index": 196
    },
    "rukoo02huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo02huud.mp3",
        "duration_in_sec": 1509,
        "duration_in_mili_sec": 1509460,
        "time": "00:25:09",
        "length_in_bytes": 9056886,
        "index": 197
    },
    "rukoo03huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo03huud.mp3",
        "duration_in_sec": 803,
        "duration_in_mili_sec": 802873,
        "time": "00:13:22",
        "length_in_bytes": 4817432,
        "index": 198
    },
    "rukoo04huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo04huud.mp3",
        "duration_in_sec": 1450,
        "duration_in_mili_sec": 1450423,
        "time": "00:24:10",
        "length_in_bytes": 8702728,
        "index": 199
    },
    "rukoo05huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo05huud.mp3",
        "duration_in_sec": 688,
        "duration_in_mili_sec": 688144,
        "time": "00:11:28",
        "length_in_bytes": 4128990,
        "index": 200
    },
    "rukoo06huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo06huud.mp3",
        "duration_in_sec": 771,
        "duration_in_mili_sec": 771291,
        "time": "00:12:51",
        "length_in_bytes": 4627877,
        "index": 201
    },
    "rukoo07huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo07huud.mp3",
        "duration_in_sec": 1215,
        "duration_in_mili_sec": 1214616,
        "time": "00:20:14",
        "length_in_bytes": 7287821,
        "index": 202
    },
    "rukoo08huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo08huud.mp3",
        "duration_in_sec": 1145,
        "duration_in_mili_sec": 1145443,
        "time": "00:19:05",
        "length_in_bytes": 6872851,
        "index": 203
    },
    "rukoo09huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo09huud.mp3",
        "duration_in_sec": 865,
        "duration_in_mili_sec": 865097,
        "time": "00:14:25",
        "length_in_bytes": 5190711,
        "index": 204
    },
    "rukoo10huud.mp3": {
        "key": "Huud",

        "title": "Surahe Huud",

        "file_name": "rukoo10huud.mp3",
        "duration_in_sec": 941,
        "duration_in_mili_sec": 940931,
        "time": "00:15:40",
        "length_in_bytes": 5645775,
        "index": 205
    },
    "intro_yousuf_.mp3": {
        "key": "Yusuf",

        "title": "Surahe Yusuf Intoduction",

        "file_name": "intro_yousuf_.mp3",
        "duration_in_sec": 999,
        "duration_in_mili_sec": 999419,
        "time": "00:16:39",
        "length_in_bytes": 5996641,
        "index": 206
    },
    "rukoo01yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo01yousuf.mp3",
        "duration_in_sec": 537,
        "duration_in_mili_sec": 537287,
        "time": "00:08:57",
        "length_in_bytes": 3223847,
        "index": 207
    },
    "rukoo02yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo02yousuf.mp3",
        "duration_in_sec": 851,
        "duration_in_mili_sec": 850730,
        "time": "00:14:10",
        "length_in_bytes": 5104507,
        "index": 208
    },
    "rukoo03yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo03yousuf.mp3",
        "duration_in_sec": 1198,
        "duration_in_mili_sec": 1197558,
        "time": "00:19:57",
        "length_in_bytes": 7185536,
        "index": 209
    },
    "rukoo04yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo04yousuf.mp3",
        "duration_in_sec": 656,
        "duration_in_mili_sec": 655856,
        "time": "00:10:55",
        "length_in_bytes": 3935266,
        "index": 210
    },
    "rukoo05yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo05yousuf.mp3",
        "duration_in_sec": 1043,
        "duration_in_mili_sec": 1042704,
        "time": "00:17:22",
        "length_in_bytes": 6256413,
        "index": 211
    },
    "rukoo06yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo06yousuf.mp3",
        "duration_in_sec": 401,
        "duration_in_mili_sec": 400901,
        "time": "00:06:40",
        "length_in_bytes": 2405535,
        "index": 212
    },
    "rukoo07yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo07yousuf.mp3",
        "duration_in_sec": 1393,
        "duration_in_mili_sec": 1393189,
        "time": "00:23:13",
        "length_in_bytes": 8359322,
        "index": 213
    },
    "rukoo08yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo08yousuf.mp3",
        "duration_in_sec": 895,
        "duration_in_mili_sec": 895451,
        "time": "00:14:55",
        "length_in_bytes": 5372837,
        "index": 214
    },
    "rukoo09yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo09yousuf.mp3",
        "duration_in_sec": 1372,
        "duration_in_mili_sec": 1371690,
        "time": "00:22:51",
        "length_in_bytes": 8230330,
        "index": 215
    },
    "rukoo10yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo10yousuf.mp3",
        "duration_in_sec": 515,
        "duration_in_mili_sec": 514664,
        "time": "00:08:34",
        "length_in_bytes": 3088115,
        "index": 216
    },
    "rukoo11yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo11yousuf.mp3",
        "duration_in_sec": 1379,
        "duration_in_mili_sec": 1378508,
        "time": "00:22:58",
        "length_in_bytes": 8271175,
        "index": 217
    },
    "rukoo12yousuf.mp3": {
        "key": "Yusuf",
        "title": "Surahe Yusuf",

        "file_name": "rukoo12yousuf.mp3",
        "duration_in_sec": 624,
        "duration_in_mili_sec": 624091,
        "time": "00:10:24",
        "length_in_bytes": 3744740,
        "index": 218
    },
    "intro_ar-raad_.mp3": {
        "key": "Ar-Raad",
        "title": "Surahe Ar-Raad Introduction",
        "file_name": "intro_ar-raad_.mp3",
        "duration_in_sec": 216,
        "duration_in_mili_sec": 216033,
        "time": "00:03:36",
        "length_in_bytes": 1296324,
        "index": 219
    },
    "rukoo01arraad.mp3": {
        "key": "Ar-Raad",
        "title": "Surahe Ar-Raad",

        "file_name": "rukoo01arraad.mp3",
        "duration_in_sec": 1498,
        "duration_in_mili_sec": 1497835,
        "time": "00:24:57",
        "length_in_bytes": 8987202,
        "index": 220
    },
    "rukoo02araad.mp3": {
        "key": "Ar-Raad",

        "title": "Surahe Ar-Raad",

        "file_name": "rukoo02araad.mp3",
        "duration_in_sec": 1291,
        "duration_in_mili_sec": 1291259,
        "time": "00:21:31",
        "length_in_bytes": 7747681,
        "index": 221
    },
    "rukoo03arraad.mp3": {
        "key": "Ar-Raad",

        "title": "Surahe Ar-Raad",

        "file_name": "rukoo03arraad.mp3",
        "duration_in_sec": 628,
        "duration_in_mili_sec": 627879,
        "time": "00:10:27",
        "length_in_bytes": 3767466,
        "index": 222
    },
    "rukoo04arraad.mp3": {
        "key": "Ar-Raad",

        "title": "Surahe Ar-Raad",

        "file_name": "rukoo04arraad.mp3",
        "duration_in_sec": 522,
        "duration_in_mili_sec": 521770,
        "time": "00:08:41",
        "length_in_bytes": 3130747,
        "index": 223
    },
    "rukoo05arraad.mp3": {
        "key": "Ar-Raad",

        "title": "Surahe Ar-Raad",

        "file_name": "rukoo05arraad.mp3",
        "duration_in_sec": 559,
        "duration_in_mili_sec": 558942,
        "time": "00:09:18",
        "length_in_bytes": 3353780,
        "index": 224
    },
    "rukoo06arraad.mp3": {
        "key": "Ar-Raad",

        "title": "Surahe Ar-Raad",

        "file_name": "rukoo06arraad.mp3",
        "duration_in_sec": 426,
        "duration_in_mili_sec": 426109,
        "time": "00:07:06",
        "length_in_bytes": 2556784,
        "index": 225
    },
    "intro_ibrahim_.mp3": {
        "key": "Ibrahim",

        "title": "Surahe Ibrahim Introduction",

        "file_name": "intro_ibrahim_.mp3",
        "duration_in_sec": 149,
        "duration_in_mili_sec": 149290,
        "time": "00:02:29",
        "length_in_bytes": 895867,
        "index": 226
    },
    "rukoo01ibrahim.mp3": {
        "key": "Ibrahim",

        "title": "Surahe Ibrahim",

        "file_name": "rukoo01ibrahim.mp3",
        "duration_in_sec": 706,
        "duration_in_mili_sec": 706429,
        "time": "00:11:46",
        "length_in_bytes": 4238704,
        "index": 227
    },
    "rukoo02ibrahim.mp3": {
        "key": "Ibrahim",

        "title": "Surahe Ibrahim",

        "file_name": "rukoo02ibrahim.mp3",
        "duration_in_sec": 895,
        "duration_in_mili_sec": 895425,
        "time": "00:14:55",
        "length_in_bytes": 5372680,
        "index": 228
    },
    "rukoo03ibrahim.mp3": {
        "key": "Ibrahim",

        "title": "Surahe Ibrahim",

        "file_name": "rukoo03ibrahim.mp3",
        "duration_in_sec": 750,
        "duration_in_mili_sec": 749662,
        "time": "00:12:29",
        "length_in_bytes": 4498100,
        "index": 229
    },
    "rukoo04ibrahim.mp3": {
        "key": "Ibrahim",

        "title": "Surahe Ibrahim",

        "file_name": "rukoo04ibrahim.mp3",
        "duration_in_sec": 1014,
        "duration_in_mili_sec": 1013734,
        "time": "00:16:53",
        "length_in_bytes": 6082531,
        "index": 230
    },
    "rukoo05ibrahim.mp3": {
        "key": "Ibrahim",

        "title": "Surahe Ibrahim",

        "file_name": "rukoo05ibrahim.mp3",
        "duration_in_sec": 336,
        "duration_in_mili_sec": 335987,
        "time": "00:05:35",
        "length_in_bytes": 2016050,
        "index": 231
    },
    "rukoo06ibrahim.mp3": {
        "key": "Ibrahim",

        "title": "Surahe Ibrahim",

        "file_name": "rukoo06ibrahim.mp3",
        "duration_in_sec": 425,
        "duration_in_mili_sec": 425091,
        "time": "00:07:05",
        "length_in_bytes": 2550672,
        "index": 232
    },
    "rukoo07ibrahim.mp3": {
        "key": "Ibrahim",

        "title": "Surahe Ibrahim",

        "file_name": "rukoo07ibrahim.mp3",
        "duration_in_sec": 503,
        "duration_in_mili_sec": 502518,
        "time": "00:08:22",
        "length_in_bytes": 3015233,
        "index": 233
    },
    "intro_al-hijr_.mp3": {
        "key": "Al-Hijr",

        "title": "Surahe Al-Hijr Introduction",

        "file_name": "intro_al-hijr_.mp3",
        "duration_in_sec": 116,
        "duration_in_mili_sec": 116454,
        "time": "00:01:56",
        "length_in_bytes": 698851,
        "index": 234
    },
    "rukoo01alhijr.mp3": {
        "key": "Al-Hijr",

        "title": "Surahe Al-Hijr",

        "file_name": "rukoo01alhijr.mp3",
        "duration_in_sec": 544,
        "duration_in_mili_sec": 544313,
        "time": "00:09:04",
        "length_in_bytes": 3266072,
        "index": 235
    },
    "rukoo02alhijr.mp3": {
        "key": "Al-Hijr",

        "title": "Surahe Al-Hijr",

        "file_name": "rukoo02alhijr.mp3",
        "duration_in_sec": 735,
        "duration_in_mili_sec": 734642,
        "time": "00:12:14",
        "length_in_bytes": 4408041,
        "index": 236
    },
    "rukoo03alhijr.mp3": {
        "key": "Al-Hijr",

        "title": "Surahe Al-Hijr",

        "file_name": "rukoo03alhijr.mp3",
        "duration_in_sec": 798,
        "duration_in_mili_sec": 798041,
        "time": "00:13:18",
        "length_in_bytes": 4788373,
        "index": 237
    },
    "rukoo04alhijr.mp3": {
        "key": "Al-Hijr",

        "title": "Surahe Al-Hijr",

        "file_name": "rukoo04alhijr.mp3",
        "duration_in_sec": 415,
        "duration_in_mili_sec": 414929,
        "time": "00:06:54",
        "length_in_bytes": 2489702,
        "index": 238
    },
    "rukoo05alhijr.mp3": {
        "key": "Al-Hijr",

        "title": "Surahe Al-Hijr",

        "file_name": "rukoo05alhijr.mp3",
        "duration_in_sec": 767,
        "duration_in_mili_sec": 766720,
        "time": "00:12:46",
        "length_in_bytes": 4600448,
        "index": 239
    },
    "rukoo06alhijr.mp3": {
        "key": "Al-Hijr",

        "title": "Surahe Al-Hijr",

        "file_name": "rukoo06alhijr.mp3",
        "duration_in_sec": 689,
        "duration_in_mili_sec": 689450,
        "time": "00:11:29",
        "length_in_bytes": 4136827,
        "index": 240
    },
    "intro_an-nahal_.mp3": {

        "key": "An-Nahal",
        "title": "Surahe An-Nahal Introduction",

        "file_name": "intro_an-nahal_.mp3",
        "duration_in_sec": 247,
        "duration_in_mili_sec": 247014,
        "time": "00:04:07",
        "length_in_bytes": 1482211,
        "index": 241
    },
    "rukoo01annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo01annahal.mp3",
        "duration_in_sec": 833,
        "duration_in_mili_sec": 832549,
        "time": "00:13:52",
        "length_in_bytes": 4995419,
        "index": 242
    },
    "rukoo02annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo02annahal.mp3",
        "duration_in_sec": 944,
        "duration_in_mili_sec": 944300,
        "time": "00:15:44",
        "length_in_bytes": 5665993,
        "index": 243
    },
    "rukoo03annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo03annahal.mp3",
        "duration_in_sec": 206,
        "duration_in_mili_sec": 206211,
        "time": "00:03:26",
        "length_in_bytes": 1237392,
        "index": 244
    },
    "rukoo04annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo04annahal.mp3",
        "duration_in_sec": 777,
        "duration_in_mili_sec": 776908,
        "time": "00:12:56",
        "length_in_bytes": 4661575,
        "index": 245
    },
    "rukoo05annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo05annahal.mp3",
        "duration_in_sec": 605,
        "duration_in_mili_sec": 604500,
        "time": "00:10:04",
        "length_in_bytes": 3627126,
        "index": 246
    },
    "rukoo06annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo06annahal.mp3",
        "duration_in_sec": 664,
        "duration_in_mili_sec": 664477,
        "time": "00:11:04",
        "length_in_bytes": 3987051,
        "index": 247
    },
    "rukoo07annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo07annahal.mp3",
        "duration_in_sec": 410,
        "duration_in_mili_sec": 409783,
        "time": "00:06:49",
        "length_in_bytes": 2458825,
        "index": 248
    },
    "rukoo08annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo08annahal.mp3",
        "duration_in_sec": 325,
        "duration_in_mili_sec": 324598,
        "time": "00:05:24",
        "length_in_bytes": 1947713,
        "index": 249
    },
    "rukoo09annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo09annahal.mp3",
        "duration_in_sec": 742,
        "duration_in_mili_sec": 741799,
        "time": "00:12:21",
        "length_in_bytes": 4450986,
        "index": 250
    },
    "rukoo10annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo10annahal.mp3",
        "duration_in_sec": 1001,
        "duration_in_mili_sec": 1001195,
        "time": "00:16:41",
        "length_in_bytes": 6007299,
        "index": 251
    },
    "rukoo11annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo11annahal.mp3",
        "duration_in_sec": 580,
        "duration_in_mili_sec": 580389,
        "time": "00:09:40",
        "length_in_bytes": 3482522,
        "index": 252
    },
    "rukoo12annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo12annahal.mp3",
        "duration_in_sec": 458,
        "duration_in_mili_sec": 457561,
        "time": "00:07:37",
        "length_in_bytes": 2745493,
        "index": 253
    },
    "rukoo13annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo13annahal.mp3",
        "duration_in_sec": 1361,
        "duration_in_mili_sec": 1360692,
        "time": "00:22:40",
        "length_in_bytes": 8164344,
        "index": 254
    },
    "rukoo14annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo14annahal.mp3",
        "duration_in_sec": 869,
        "duration_in_mili_sec": 869172,
        "time": "00:14:29",
        "length_in_bytes": 5215161,
        "index": 255
    },
    "rukoo15annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo15annahal.mp3",
        "duration_in_sec": 601,
        "duration_in_mili_sec": 601208,
        "time": "00:10:01",
        "length_in_bytes": 3607377,
        "index": 256
    },
    "rukoo16annahal.mp3": {
        "key": "An-Nahal",

        "title": "Surahe An-Nahal",

        "file_name": "rukoo16annahal.mp3",
        "duration_in_sec": 561,
        "duration_in_mili_sec": 560901,
        "time": "00:09:20",
        "length_in_bytes": 3365598,
        "index": 257
    },
    "intro_bani-israil_.mp3": {
        "key": "Bani-Israil",
        "title": "Surahe Bani-Israil Introduction",

        "file_name": "intro_bani-israil_.mp3",
        "duration_in_sec": 287,
        "duration_in_mili_sec": 287164,
        "time": "00:04:47",
        "length_in_bytes": 1723112,
        "index": 258
    },
    "rukoo01baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo01baniisrail.mp3",
        "duration_in_sec": 3007,
        "duration_in_mili_sec": 3006772,
        "time": "00:50:06",
        "length_in_bytes": 18040859,
        "index": 259
    },
    "rukoo02baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo02baniisrail.mp3",
        "duration_in_sec": 1064,
        "duration_in_mili_sec": 1064490,
        "time": "00:17:44",
        "length_in_bytes": 6387067,
        "index": 260
    },
    "rukoo03baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo03baniisrail.mp3",
        "duration_in_sec": 716,
        "duration_in_mili_sec": 716330,
        "time": "00:11:56",
        "length_in_bytes": 4298170,
        "index": 261
    },
    "rukoo04baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo04baniisrail.mp3",
        "duration_in_sec": 867,
        "duration_in_mili_sec": 866638,
        "time": "00:14:26",
        "length_in_bytes": 5199958,
        "index": 262
    },
    "rukoo05baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo05baniisrail.mp3",
        "duration_in_sec": 952,
        "duration_in_mili_sec": 951771,
        "time": "00:15:51",
        "length_in_bytes": 5710820,
        "index": 263
    },
    "rukoo06baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo06baniisrail.mp3",
        "duration_in_sec": 944,
        "duration_in_mili_sec": 944274,
        "time": "00:15:44",
        "length_in_bytes": 2832951,
        "index": 264
    },
    "rukoo07baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo07baniisrail.mp3",
        "duration_in_sec": 683,
        "duration_in_mili_sec": 682998,
        "time": "00:11:22",
        "length_in_bytes": 4098176,
        "index": 265
    },
    "rukoo08baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo08baniisrail.mp3",
        "duration_in_sec": 361,
        "duration_in_mili_sec": 360986,
        "time": "00:06:00",
        "length_in_bytes": 2166108,
        "index": 266
    },
    "rukoo09baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo09baniisrail.mp3",
        "duration_in_sec": 984,
        "duration_in_mili_sec": 983693,
        "time": "00:16:23",
        "length_in_bytes": 2951207,
        "index": 267
    },
    "rukoo10baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo10baniisrail.mp3",
        "duration_in_sec": 745,
        "duration_in_mili_sec": 744568,
        "time": "00:12:24",
        "length_in_bytes": 4467600,
        "index": 268
    },
    "rukoo11baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo11baniisrail.mp3",
        "duration_in_sec": 501,
        "duration_in_mili_sec": 501264,
        "time": "00:08:21",
        "length_in_bytes": 3007710,
        "index": 269
    },
    "rukoo12baniisrail.mp3": {
        "key": "Bani-Israil",

        "title": "Surahe Bani-Israil",

        "file_name": "rukoo12baniisrail.mp3",
        "duration_in_sec": 855,
        "duration_in_mili_sec": 854570,
        "time": "00:14:14",
        "length_in_bytes": 5127547,
        "index": 270
    },
    "al-kahaf_intro_.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf Introduction",

        "file_name": "al-kahaf_intro_.mp3",
        "duration_in_sec": 463,
        "duration_in_mili_sec": 463073,
        "time": "00:07:43",
        "length_in_bytes": 2778564,
        "index": 271
    },
    "rukoo01alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo01alkahaf.mp3",
        "duration_in_sec": 586,
        "duration_in_mili_sec": 585900,
        "time": "00:09:45",
        "length_in_bytes": 3515530,
        "index": 272
    },
    "rukoo02alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo02alkahaf.mp3",
        "duration_in_sec": 966,
        "duration_in_mili_sec": 966348,
        "time": "00:16:06",
        "length_in_bytes": 2899234,
        "index": 273
    },
    "rukoo03alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo03alkahaf.mp3",
        "duration_in_sec": 965,
        "duration_in_mili_sec": 964545,
        "time": "00:16:04",
        "length_in_bytes": 2893764,
        "index": 274
    },
    "rukoo04alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo04alkahaf.mp3",
        "duration_in_sec": 993,
        "duration_in_mili_sec": 992731,
        "time": "00:16:32",
        "length_in_bytes": 2978385,
        "index": 275
    },
    "rukoo05alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo05alkahaf.mp3",
        "duration_in_sec": 512,
        "duration_in_mili_sec": 511948,
        "time": "00:08:31",
        "length_in_bytes": 3071815,
        "index": 276
    },
    "rukoo06alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo06alkahaf.mp3",
        "duration_in_sec": 328,
        "duration_in_mili_sec": 328411,
        "time": "00:05:28",
        "length_in_bytes": 1970597,
        "index": 277
    },
    "rukoo07alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo07alkahaf.mp3",
        "duration_in_sec": 394,
        "duration_in_mili_sec": 394188,
        "time": "00:06:34",
        "length_in_bytes": 2365255,
        "index": 278
    },
    "rukoo08alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo08alkahaf.mp3",
        "duration_in_sec": 390,
        "duration_in_mili_sec": 390191,
        "time": "00:06:30",
        "length_in_bytes": 2341337,
        "index": 279
    },
    "rukoo09alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo09alkahaf.mp3",
        "duration_in_sec": 891,
        "duration_in_mili_sec": 890854,
        "time": "00:14:50",
        "length_in_bytes": 2672690,
        "index": 280
    },
    "rukoo10alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo10alkahaf.mp3",
        "duration_in_sec": 765,
        "duration_in_mili_sec": 765336,
        "time": "00:12:45",
        "length_in_bytes": 2296135,
        "index": 281
    },
    "rukoo11alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo11alkahaf.mp3",
        "duration_in_sec": 1357,
        "duration_in_mili_sec": 1357035,
        "time": "00:22:37",
        "length_in_bytes": 4071233,
        "index": 282
    },
    "rukoo12alkahaf.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Al-Kahaf",

        "file_name": "rukoo12alkahaf.mp3",
        "duration_in_sec": 458,
        "duration_in_mili_sec": 458109,
        "time": "00:07:38",
        "length_in_bytes": 2748784,
        "index": 283
    },
    "maryam_intro_.mp3": {
        "key": "Al-Kahaf",

        "title": "Surahe Maryam Introduction",

        "file_name": "maryam_intro_.mp3",
        "duration_in_sec": 798,
        "duration_in_mili_sec": 798380,
        "time": "00:13:18",
        "length_in_bytes": 4790410,
        "index": 284
    },
    "rukoo01maryam.mp3": {
        "key": "Maryam",
        "title": "Surahe Maryam",

        "file_name": "rukoo01maryam.mp3",
        "duration_in_sec": 1022,
        "duration_in_mili_sec": 1021753,
        "time": "00:17:01",
        "length_in_bytes": 3065388,
        "index": 285
    },
    "rukoo02maryam.mp3": {
        "key": "Maryam",

        "title": "Surahe Maryam",

        "file_name": "rukoo02maryam.mp3",
        "duration_in_sec": 1314,
        "duration_in_mili_sec": 1314403,
        "time": "00:21:54",
        "length_in_bytes": 3943338,
        "index": 286
    },
    "rukoo03maryam.mp3": {
        "key": "Maryam",

        "title": "Surahe Maryam",

        "file_name": "rukoo03maryam.mp3",
        "duration_in_sec": 338,
        "duration_in_mili_sec": 337528,
        "time": "00:05:37",
        "length_in_bytes": 2025297,
        "index": 287
    },
    "rukoo04maryam.mp3": {
        "key": "Maryam",

        "title": "Surahe Maryam",

        "file_name": "rukoo04maryam.mp3",
        "duration_in_sec": 1051,
        "duration_in_mili_sec": 1051011,
        "time": "00:17:31",
        "length_in_bytes": 3153223,
        "index": 288
    },
    "rukoo05maryam.mp3": {
        "key": "Maryam",

        "title": "Surahe Maryam",

        "file_name": "rukoo05maryam.mp3",
        "duration_in_sec": 547,
        "duration_in_mili_sec": 546638,
        "time": "00:09:06",
        "length_in_bytes": 3279958,
        "index": 289
    },
    "rukoo06maryam.mp3": {
        "key": "Maryam",

        "title": "Surahe Maryam",

        "file_name": "rukoo06maryam.mp3",
        "duration_in_sec": 331,
        "duration_in_mili_sec": 331233,
        "time": "00:05:31",
        "length_in_bytes": 1987524,
        "index": 290
    },
    "_intro_taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha Introduction",

        "file_name": "_intro_taha.mp3",
        "duration_in_sec": 562,
        "duration_in_mili_sec": 561946,
        "time": "00:09:21",
        "length_in_bytes": 3371805,
        "index": 291
    },
    "rukoo01taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha",

        "file_name": "rukoo01taha.mp3",
        "duration_in_sec": 927,
        "duration_in_mili_sec": 926642,
        "time": "00:15:26",
        "length_in_bytes": 2780053,
        "index": 292
    },
    "rukoo02taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha",

        "file_name": "rukoo02taha.mp3",
        "duration_in_sec": 1568,
        "duration_in_mili_sec": 1567791,
        "time": "00:26:07",
        "length_in_bytes": 4703564,
        "index": 293
    },
    "rukoo03taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha",

        "file_name": "rukoo03taha.mp3",
        "duration_in_sec": 1618,
        "duration_in_mili_sec": 1617711,
        "time": "00:26:57",
        "length_in_bytes": 4853324,
        "index": 294
    },
    "rukoo04taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha",

        "file_name": "rukoo04taha.mp3",
        "duration_in_sec": 1653,
        "duration_in_mili_sec": 1652898,
        "time": "00:27:32",
        "length_in_bytes": 4958885,
        "index": 295
    },
    "rukoo05taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha",

        "file_name": "rukoo05taha.mp3",
        "duration_in_sec": 1518,
        "duration_in_mili_sec": 1517610,
        "time": "00:25:17",
        "length_in_bytes": 4553020,
        "index": 296
    },
    "rukoo06taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha",

        "file_name": "rukoo06taha.mp3",
        "duration_in_sec": 1358,
        "duration_in_mili_sec": 1358211,
        "time": "00:22:38",
        "length_in_bytes": 4074823,
        "index": 297
    },
    "rukoo07taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha",

        "file_name": "rukoo07taha.mp3",
        "duration_in_sec": 1403,
        "duration_in_mili_sec": 1403481,
        "time": "00:23:23",
        "length_in_bytes": 4210570,
        "index": 298
    },
    "rukoo08taha.mp3": {
        "key": "Taha",

        "title": "Surahe Taha",

        "file_name": "rukoo08taha.mp3",
        "duration_in_sec": 519,
        "duration_in_mili_sec": 518844,
        "time": "00:08:38",
        "length_in_bytes": 3113192,
        "index": 299
    },
    "al-anbia_intro_.mp3": {
        "key": "Al-Anbya",

        "title": "Surahe Al-Anbya Introduction",

        "file_name": "al-anbia_intro_.mp3",
        "duration_in_sec": 306,
        "duration_in_mili_sec": 305659,
        "time": "00:05:05",
        "length_in_bytes": 1834081,
        "index": 300
    },
    "rukoo01alanbia.mp3": {
                "key": "Al-Anbya",
        "title": "Surahe Al-Anbya",

        "file_name": "rukoo01alanbia.mp3",
        "duration_in_sec": 1283,
        "duration_in_mili_sec": 1283082,
        "time": "00:21:23",
        "length_in_bytes": 3849438,
        "index": 301
    },
    "rukoo02alanbia.mp3": {
                "key": "Al-Anbya",
        "title": "Surahe Al-Anbya",

        "file_name": "rukoo02alanbia.mp3",
        "duration_in_sec": 1004,
        "duration_in_mili_sec": 1003520,
        "time": "00:16:43",
        "length_in_bytes": 3010688,
        "index": 302
    },
    "rukoo03alanbia.mp3": {
                "key": "Al-Anbya",
        "title": "Surahe Al-Anbya",

        "file_name": "rukoo03alanbia.mp3",
        "duration_in_sec": 848,
        "duration_in_mili_sec": 847726,
        "time": "00:14:07",
        "length_in_bytes": 2543368,
        "index": 303
    },
    "rukoo04alanbia.mp3": {
                "key": "Al-Anbya",
        "title": "Surahe Al-Anbya",

        "file_name": "rukoo04alanbia.mp3",
        "duration_in_sec": 568,
        "duration_in_mili_sec": 567954,
        "time": "00:09:27",
        "length_in_bytes": 3407854,
        "index": 304
    },
    "rukoo05alanbia.mp3": {
                "key": "Al-Anbya",
        "title": "Surahe Al-Anbya",

        "file_name": "rukoo05alanbia.mp3",
        "duration_in_sec": 1727,
        "duration_in_mili_sec": 1726694,
        "time": "00:28:46",
        "length_in_bytes": 5180273,
        "index": 305
    },
    "rukoo06alanbia.mp3": {
                "key": "Al-Anbya",
        "title": "Surahe Al-Anbya",

        "file_name": "rukoo06alanbia.mp3",
        "duration_in_sec": 2592,
        "duration_in_mili_sec": 2591660,
        "time": "00:43:11",
        "length_in_bytes": 7775172,
        "index": 306
    },
    "rukoo07alanbia.mp3": {
                "key": "Al-Anbya",
        "title": "Surahe Al-Anbya",

        "file_name": "rukoo07alanbia.mp3",
        "duration_in_sec": 1488,
        "duration_in_mili_sec": 1487752,
        "time": "00:24:47",
        "length_in_bytes": 4463384,
        "index": 307
    },
    "al-hajj_intro_.mp3": {
        "key": "Al-Hajj",
        "title": "Surahe Al-Hajj Introduction",

        "file_name": "al-hajj_intro_.mp3",
        "duration_in_sec": 453,
        "duration_in_mili_sec": 453277,
        "time": "00:07:33",
        "length_in_bytes": 2719851,
        "index": 308
    },
    "rukoo01alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo01alhajj.mp3",
        "duration_in_sec": 1563,
        "duration_in_mili_sec": 1562697,
        "time": "00:26:02",
        "length_in_bytes": 4688219,
        "index": 309
    },
    "rukoo02alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo02alhajj.mp3",
        "duration_in_sec": 1232,
        "duration_in_mili_sec": 1231882,
        "time": "00:20:31",
        "length_in_bytes": 3695775,
        "index": 310
    },
    "rukoo03alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo03alhajj.mp3",
        "duration_in_sec": 880,
        "duration_in_mili_sec": 879700,
        "time": "00:14:39",
        "length_in_bytes": 2639290,
        "index": 311
    },
    "rukoo04alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo04alhajj.mp3",
        "duration_in_sec": 1392,
        "duration_in_mili_sec": 1391543,
        "time": "00:23:11",
        "length_in_bytes": 4174757,
        "index": 312
    },
    "rukoo05alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo05alhajj.mp3",
        "duration_in_sec": 1230,
        "duration_in_mili_sec": 1229923,
        "time": "00:20:29",
        "length_in_bytes": 3689898,
        "index": 313
    },
    "rukoo06alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo06alhajj.mp3",
        "duration_in_sec": 977,
        "duration_in_mili_sec": 976927,
        "time": "00:16:16",
        "length_in_bytes": 2930973,
        "index": 314
    },
    "rukoo07alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo07alhajj.mp3",
        "duration_in_sec": 1810,
        "duration_in_mili_sec": 1810442,
        "time": "00:30:10",
        "length_in_bytes": 5431518,
        "index": 315
    },
    "rukoo08alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo08alhajj.mp3",
        "duration_in_sec": 518,
        "duration_in_mili_sec": 518452,
        "time": "00:08:38",
        "length_in_bytes": 3110841,
        "index": 316
    },
    "rukoo09alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo09alhajj.mp3",
        "duration_in_sec": 500,
        "duration_in_mili_sec": 500376,
        "time": "00:08:20",
        "length_in_bytes": 3002381,
        "index": 317
    },
    "rukoo10alhajj.mp3": {
                "key": "Al-Hajj",

        "title": "Surahe Al-Hajj",

        "file_name": "rukoo10alhajj.mp3",
        "duration_in_sec": 989,
        "duration_in_mili_sec": 989414,
        "time": "00:16:29",
        "length_in_bytes": 2968433,
        "index": 318
    },
    "al-mominoon_intro_.mp3": {
        "key": "Al-mominoon",

        "title": "Surahe Al-mominoon Introduction",

        "file_name": "al-mominoon_intro_.mp3",
        "duration_in_sec": 377,
        "duration_in_mili_sec": 377078,
        "time": "00:06:17",
        "length_in_bytes": 2262593,
        "index": 319
    },
    "rukoo01mominoon.mp3": {
                "key": "Al-mominoon",

        "title": "Surahe Al-mominoon",

        "file_name": "rukoo01mominoon.mp3",
        "duration_in_sec": 2761,
        "duration_in_mili_sec": 2760699,
        "time": "00:46:00",
        "length_in_bytes": 8282322,
        "index": 320
    },
    "rukoo02mominoon.mp3": {
        "key": "Al-mominoon",
        "title": "Surahe Al-mominoon",

        "file_name": "rukoo02mominoon.mp3",
        "duration_in_sec": 950,
        "duration_in_mili_sec": 950152,
        "time": "00:15:50",
        "length_in_bytes": 2850584,
        "index": 321
    },
    "rukoo03mominoon.mp3": {
        "key": "Al-mominoon",

        "title": "Surahe Al-mominoon",

        "file_name": "rukoo03mominoon.mp3",
        "duration_in_sec": 843,
        "duration_in_mili_sec": 842919,
        "time": "00:14:02",
        "length_in_bytes": 2528886,
        "index": 322
    },
    "rukoo04mominoon.mp3": {
        "key": "Al-mominoon",
        "title": "Surahe Al-mominoon",

        "file_name": "rukoo04mominoon.mp3",
        "duration_in_sec": 2534,
        "duration_in_mili_sec": 2534191,
        "time": "00:42:14",
        "length_in_bytes": 7602764,
        "index": 323
    },
    "rukoo05mominoon.mp3": {
        "key": "Al-mominoon",
        "title": "Surahe Al-mominoon",

        "file_name": "rukoo05mominoon.mp3",
        "duration_in_sec": 831,
        "duration_in_mili_sec": 831033,
        "time": "00:13:51",
        "length_in_bytes": 2493228,
        "index": 324
    },
    "rukoo06mominoon.mp3": {
        "key": "Al-mominoon",
        "title": "Surahe Al-mominoon",

        "file_name": "rukoo06mominoon.mp3",
        "duration_in_sec": 1145,
        "duration_in_mili_sec": 1144503,
        "time": "00:19:04",
        "length_in_bytes": 3433637,
        "index": 325
    },
    "an-noor_intro_.mp3": {
        "key": "An-Noor",
        "title": "Surahe An-Noor Introduction",

        "file_name": "an-noor_intro_.mp3",
        "duration_in_sec": 2193,
        "duration_in_mili_sec": 2193345,
        "time": "00:36:33",
        "length_in_bytes": 13160263,
        "index": 326
    },
    "rukoo01annoor.mp3": {
        "key": "An-Noor",
        "title": "Surahe An-Noor",

        "file_name": "rukoo01annoor.mp3",
        "duration_in_sec": 9356,
        "duration_in_mili_sec": 9355520,
        "time": "02:35:55",
        "length_in_bytes": 56133451,
        "index": 327
    },
    "rukoo02annoor.mp3": {
        "key": "An-Noor",
        "title": "Surahe An-Noor",

        "file_name": "rukoo02annoor.mp3",
        "duration_in_sec": 1614,
        "duration_in_mili_sec": 1614158,
        "time": "00:26:54",
        "length_in_bytes": 9685141,
        "index": 328
    },
    "rukoo03annoor.mp3": {
        "key": "An-Noor",

        "title": "Surahe An-Noor",

        "file_name": "rukoo03annoor.mp3",
        "duration_in_sec": 703,
        "duration_in_mili_sec": 703399,
        "time": "00:11:43",
        "length_in_bytes": 4220523,
        "index": 329
    },
    "rukoo04annoor.mp3": {
        "key": "An-Noor",

        "title": "Surahe An-Noor",

        "file_name": "rukoo04annoor.mp3",
        "duration_in_sec": 6079,
        "duration_in_mili_sec": 6078511,
        "time": "01:41:18",
        "length_in_bytes": 36471362,
        "index": 330
    },
    "rukoo05annoor.mp3": {
        "key": "An-Noor",

        "title": "Surahe An-Noor",

        "file_name": "rukoo05annoor.mp3",
        "duration_in_sec": 1287,
        "duration_in_mili_sec": 1286975,
        "time": "00:21:26",
        "length_in_bytes": 7721976,
        "index": 331
    },
    "rukoo06annoor.mp3": {
        "key": "An-Noor",

        "title": "Surahe An-Noor",

        "file_name": "rukoo06annoor.mp3",
        "duration_in_sec": 695,
        "duration_in_mili_sec": 695327,
        "time": "00:11:35",
        "length_in_bytes": 4172155,
        "index": 332
    },
    "rukoo07annoor.mp3": {
        "key": "An-Noor",

        "title": "Surahe An-Noor",

        "file_name": "rukoo07annoor.mp3",
        "duration_in_sec": 917,
        "duration_in_mili_sec": 916820,
        "time": "00:15:16",
        "length_in_bytes": 5501046,
        "index": 333
    },
    "rukoo08annoor.mp3": {
        "key": "An-Noor",

        "title": "Surahe An-Noor",

        "file_name": "rukoo08annoor.mp3",
        "duration_in_sec": 995,
        "duration_in_mili_sec": 994691,
        "time": "00:16:34",
        "length_in_bytes": 5968335,
        "index": 334
    },
    "rukoo09annoor.mp3": {
        "key": "An-Noor",

        "title": "Surahe An-Noor",

        "file_name": "rukoo09annoor.mp3",
        "duration_in_sec": 407,
        "duration_in_mili_sec": 407380,
        "time": "00:06:47",
        "length_in_bytes": 2444406,
        "index": 335
    },
    "al-furqan_intro_.mp3": {
        "key": "Al-Furqan",

        "title": "Surahe Al-Furqan Introduction",

        "file_name": "al-furqan_intro_.mp3",
        "duration_in_sec": 135,
        "duration_in_mili_sec": 134844,
        "time": "00:02:14",
        "length_in_bytes": 809192,
        "index": 336
    },
    "rukoo01alfurqan.mp3": {
        "key": "Al-Furqan",
        "title": "Surahe Al-Furqan",

        "file_name": "rukoo01alfurqan.mp3",
        "duration_in_sec": 1816,
        "duration_in_mili_sec": 1815536,
        "time": "00:30:15",
        "length_in_bytes": 10893409,
        "index": 337
    },
    "rukoo02alfurqan.mp3": {
        "key": "Al-Furqan",

        "title": "Surahe Al-Furqan",

        "file_name": "rukoo02alfurqan.mp3",
        "duration_in_sec": 1127,
        "duration_in_mili_sec": 1126896,
        "time": "00:18:46",
        "length_in_bytes": 6761569,
        "index": 338
    },
    "rukoo03alfurqan.mp3": {
        "key": "Al-Furqan",

        "title": "Surahe Al-Furqan",

        "file_name": "rukoo03alfurqan.mp3",
        "duration_in_sec": 1027,
        "duration_in_mili_sec": 1027474,
        "time": "00:17:07",
        "length_in_bytes": 6164974,
        "index": 339
    },
    "rukoo04alfurqan.mp3": {
        "key": "Al-Furqan",

        "title": "Surahe Al-Furqan",

        "file_name": "rukoo04alfurqan.mp3",
        "duration_in_sec": 602,
        "duration_in_mili_sec": 601704,
        "time": "00:10:01",
        "length_in_bytes": 3610355,
        "index": 340
    },
    "rukoo05alfurqan.mp3": {
        "key": "Al-Furqan",

        "title": "Surahe Al-Furqan",

        "file_name": "rukoo05alfurqan.mp3",
        "duration_in_sec": 1409,
        "duration_in_mili_sec": 1408679,
        "time": "00:23:28",
        "length_in_bytes": 8452266,
        "index": 341
    },
    "rukoo06alfurqan.mp3": {
        "key": "Al-Furqan",

        "title": "Surahe Al-Furqan",

        "file_name": "rukoo06alfurqan.mp3",
        "duration_in_sec": 2089,
        "duration_in_mili_sec": 2088777,
        "time": "00:34:48",
        "length_in_bytes": 12532854,
        "index": 342
    },
    "ash-shoara_intro_.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara Introduction",

        "file_name": "ash-shoara_intro_.mp3",
        "duration_in_sec": 345,
        "duration_in_mili_sec": 344895,
        "time": "00:05:44",
        "length_in_bytes": 2069496,
        "index": 343
    },
    "rukoo01ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo01ashshoara.mp3",
        "duration_in_sec": 721,
        "duration_in_mili_sec": 720771,
        "time": "00:12:00",
        "length_in_bytes": 4324752,
        "index": 344
    },
    "rukoo02ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo02ashshoara.mp3",
        "duration_in_sec": 1550,
        "duration_in_mili_sec": 1549819,
        "time": "00:25:49",
        "length_in_bytes": 9299041,
        "index": 345
    },
    "rukoo03ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo03ashshoara.mp3",
        "duration_in_sec": 1002,
        "duration_in_mili_sec": 1001900,
        "time": "00:16:41",
        "length_in_bytes": 6011593,
        "index": 346
    },
    "rukoo04ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo04ashshoara.mp3",
        "duration_in_sec": 917,
        "duration_in_mili_sec": 916637,
        "time": "00:15:16",
        "length_in_bytes": 5499948,
        "index": 347
    },
    "rukoo05ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo05ashshoara.mp3",
        "duration_in_sec": 2016,
        "duration_in_mili_sec": 2016470,
        "time": "00:33:36",
        "length_in_bytes": 12099012,
        "index": 348
    },
    "rukoo06ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo06ashshoara.mp3",
        "duration_in_sec": 1435,
        "duration_in_mili_sec": 1435167,
        "time": "00:23:55",
        "length_in_bytes": 8611132,
        "index": 349
    },
    "rukoo07ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo07ashshoara.mp3",
        "duration_in_sec": 767,
        "duration_in_mili_sec": 767242,
        "time": "00:12:47",
        "length_in_bytes": 4603583,
        "index": 350
    },
    "rukoo08ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo08ashshoara.mp3",
        "duration_in_sec": 1118,
        "duration_in_mili_sec": 1117832,
        "time": "00:18:37",
        "length_in_bytes": 6707119,
        "index": 351
    },
    "rukoo09ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo09ashshoara.mp3",
        "duration_in_sec": 771,
        "duration_in_mili_sec": 771370,
        "time": "00:12:51",
        "length_in_bytes": 4628410,
        "index": 352
    },
    "rukoo10ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo10ashshoara.mp3",
        "duration_in_sec": 599,
        "duration_in_mili_sec": 598909,
        "time": "00:09:58",
        "length_in_bytes": 3593584,
        "index": 353
    },
    "rukoo11ashshoara.mp3": {
        "key": "Ash-Shoara",

        "title": "Surahe Ash-Shoara",

        "file_name": "rukoo11ashshoara.mp3",
        "duration_in_sec": 2968,
        "duration_in_mili_sec": 2968033,
        "time": "00:49:28",
        "length_in_bytes": 17808422,
        "index": 354
    },
    "an-namal_intro_.mp3": {
        "key": "An-Namal",

        "title": "Surahe An-Namal Introduction",

        "file_name": "an-namal_intro_.mp3",
        "duration_in_sec": 354,
        "duration_in_mili_sec": 354142,
        "time": "00:05:54",
        "length_in_bytes": 2124980,
        "index": 355
    },
    "rukoo01annamal.mp3": {
        "key": "An-Namal",

        "title": "Surahe An-Namal",

        "file_name": "rukoo01annamal.mp3",
        "duration_in_sec": 1394,
        "duration_in_mili_sec": 1394051,
        "time": "00:23:14",
        "length_in_bytes": 8364495,
        "index": 356
    },
    "rukoo02annamal.mp3": {
        "key": "An-Namal",

        "title": "Surahe An-Namal",

        "file_name": "rukoo02annamal.mp3",
        "duration_in_sec": 2212,
        "duration_in_mili_sec": 2211971,
        "time": "00:36:51",
        "length_in_bytes": 13272015,
        "index": 357
    },
    "rukoo03annamal.mp3": {
        "key": "An-Namal",

        "title": "Surahe An-Namal",

        "file_name": "rukoo03annamal.mp3",
        "duration_in_sec": 1788,
        "duration_in_mili_sec": 1787585,
        "time": "00:29:47",
        "length_in_bytes": 10725703,
        "index": 358
    },
    "rukoo04annamal.mp3": {
        "key": "An-Namal",

        "title": "Surahe An-Namal",

        "file_name": "rukoo04annamal.mp3",
        "duration_in_sec": 1051,
        "duration_in_mili_sec": 1050984,
        "time": "00:17:30",
        "length_in_bytes": 6306035,
        "index": 359
    },
    "rukoo05annamal.mp3": {
        "key": "An-Namal",

        "title": "Surahe An-Namal",

        "file_name": "rukoo05annamal.mp3",
        "duration_in_sec": 2336,
        "duration_in_mili_sec": 2336078,
        "time": "00:38:56",
        "length_in_bytes": 14016661,
        "index": 360
    },
    "rukoo06annamal.mp3": {
        "key": "An-Namal",

        "title": "Surahe An-Namal",

        "file_name": "rukoo06annamal.mp3",
        "duration_in_sec": 1135,
        "duration_in_mili_sec": 1135334,
        "time": "00:18:55",
        "length_in_bytes": 6812131,
        "index": 361
    },
    "rukoo07annamal.mp3": {
        "key": "An-Namal",

        "title": "Surahe An-Namal",

        "file_name": "rukoo07annamal.mp3",
        "duration_in_sec": 685,
        "duration_in_mili_sec": 684565,
        "time": "00:11:24",
        "length_in_bytes": 4107580,
        "index": 362
    },
    "al-qasas_intro_.mp3": {
                "key": "Al-Qasas",

        "title": "Surahe Al-Qasas Introduction",

        "file_name": "al-qasas_intro_.mp3",
        "duration_in_sec": 517,
        "duration_in_mili_sec": 517172,
        "time": "00:08:37",
        "length_in_bytes": 3103161,
        "index": 363
    },
    "rukoo01alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo01alqasas.mp3",
        "duration_in_sec": 1423,
        "duration_in_mili_sec": 1422968,
        "time": "00:23:42",
        "length_in_bytes": 8538000,
        "index": 364
    },
    "rukoo02alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo02alqasas.mp3",
        "duration_in_sec": 957,
        "duration_in_mili_sec": 956630,
        "time": "00:15:56",
        "length_in_bytes": 5739909,
        "index": 365
    },
    "rukoo03alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo03alqasas.mp3",
        "duration_in_sec": 1206,
        "duration_in_mili_sec": 1206152,
        "time": "00:20:06",
        "length_in_bytes": 7237102,
        "index": 366
    },
    "rukoo04alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo04alqasas.mp3",
        "duration_in_sec": 1536,
        "duration_in_mili_sec": 1535817,
        "time": "00:25:35",
        "length_in_bytes": 9215094,
        "index": 367
    },
    "rukoo05alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo05alqasas.mp3",
        "duration_in_sec": 950,
        "duration_in_mili_sec": 950126,
        "time": "00:15:50",
        "length_in_bytes": 5700882,
        "index": 368
    },
    "rukoo06alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo06alqasas.mp3",
        "duration_in_sec": 1791,
        "duration_in_mili_sec": 1791112,
        "time": "00:29:51",
        "length_in_bytes": 10746862,
        "index": 369
    },
    "rukoo07alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo07alqasas.mp3",
        "duration_in_sec": 997,
        "duration_in_mili_sec": 996624,
        "time": "00:16:36",
        "length_in_bytes": 5979933,
        "index": 370
    },
    "rukoo08alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo08alqasas.mp3",
        "duration_in_sec": 861,
        "duration_in_mili_sec": 860552,
        "time": "00:14:20",
        "length_in_bytes": 5163439,
        "index": 371
    },
    "rukoo09alqasas.mp3": {
        "key": "Al-Qasas",

        "title": "Surahe Al-Qasas",

        "file_name": "rukoo09alqasas.mp3",
        "duration_in_sec": 1076,
        "duration_in_mili_sec": 1076323,
        "time": "00:17:56",
        "length_in_bytes": 6458131,
        "index": 372
    },
    "al-ankaboot_intro_.mp3": {
        "key": "Al-Ankaboot",

        "title": "Surahe Al-Ankaboot Introduction",

        "file_name": "al-ankaboot_intro_.mp3",
        "duration_in_sec": 283,
        "duration_in_mili_sec": 282802,
        "time": "00:04:42",
        "length_in_bytes": 1696938,
        "index": 373
    },
    "rukoo01alankaboot.mp3": {
        "key": "Al-Ankaboot",

        "title": "Surahe Al-Ankaboot",

        "file_name": "rukoo01alankaboot.mp3",
        "duration_in_sec": 2082,
        "duration_in_mili_sec": 2081959,
        "time": "00:34:41",
        "length_in_bytes": 12491946,
        "index": 374
    },
    "rukoo02alankaboot.mp3": {
        "key": "Al-Ankaboot",

        "title": "Surahe Al-Ankaboot",

        "file_name": "rukoo02alankaboot.mp3",
        "duration_in_sec": 1048,
        "duration_in_mili_sec": 1047902,
        "time": "00:17:27",
        "length_in_bytes": 6287603,
        "index": 375
    },
    "rukoo03alankaboot.mp3": {
        "key": "Al-Ankaboot",

        "title": "Surahe Al-Ankaboot",

        "file_name": "rukoo03alankaboot.mp3",
        "duration_in_sec": 1013,
        "duration_in_mili_sec": 1013342,
        "time": "00:16:53",
        "length_in_bytes": 6080180,
        "index": 376
    },
    "rukoo04alankaboot.mp3": {
        "key": "Al-Ankaboot",

        "title": "Surahe Al-Ankaboot",

        "file_name": "rukoo04alankaboot.mp3",
        "duration_in_sec": 1335,
        "duration_in_mili_sec": 1335301,
        "time": "00:22:15",
        "length_in_bytes": 8011998,
        "index": 377
    },
    "rukoo05alankaboot.mp3": {
        "key": "Al-Ankaboot",

        "title": "Surahe Al-Ankaboot",

        "file_name": "rukoo05alankaboot.mp3",
        "duration_in_sec": 2085,
        "duration_in_mili_sec": 2085355,
        "time": "00:34:45",
        "length_in_bytes": 12512322,
        "index": 378
    },
    "rukoo06alankaboot.mp3": {
        "key": "Al-Ankaboot",

        "title": "Surahe Al-Ankaboot",

        "file_name": "rukoo06alankaboot.mp3",
        "duration_in_sec": 774,
        "duration_in_mili_sec": 773904,
        "time": "00:12:53",
        "length_in_bytes": 4643613,
        "index": 379
    },
    "rukoo07alankaboot.mp3": {
        "key": "Al-Ankaboot",

        "title": "Surahe Al-Ankaboot",

        "file_name": "rukoo07alankaboot.mp3",
        "duration_in_sec": 357,
        "duration_in_mili_sec": 357198,
        "time": "00:05:57",
        "length_in_bytes": 2143318,
        "index": 380
    },
    "ar-room_intro_.mp3": {
        "key": "Ar-Room",

        "title": "Surahe Ar-Room Introduction",

        "file_name": "ar-room_intro_.mp3",
        "duration_in_sec": 906,
        "duration_in_mili_sec": 905561,
        "time": "00:15:05",
        "length_in_bytes": 5433493,
        "index": 381
    },
    "rukoo01arroom.mp3": {
        "key": "Ar-Room",

        "title": "Surahe Ar-Room",

        "file_name": "rukoo01arroom.mp3",
        "duration_in_sec": 1210,
        "duration_in_mili_sec": 1210096,
        "time": "00:20:10",
        "length_in_bytes": 7260706,
        "index": 382
    },
    "rukoo02arroom.mp3": {
        "key": "Ar-Room",

        "title": "Surahe Ar-Room",

        "file_name": "rukoo02arroom.mp3",
        "duration_in_sec": 1154,
        "duration_in_mili_sec": 1154351,
        "time": "00:19:14",
        "length_in_bytes": 6926297,
        "index": 383
    },
    "rukoo03arroom.mp3": {
        "key": "Ar-Room",

        "title": "Surahe Ar-Room",

        "file_name": "rukoo03arroom.mp3",
        "duration_in_sec": 1348,
        "duration_in_mili_sec": 1348362,
        "time": "00:22:28",
        "length_in_bytes": 8090366,
        "index": 384
    },
    "rukoo04arroom.mp3": {
        "key": "Ar-Room",

        "title": "Surahe Ar-Room",

        "file_name": "rukoo04arroom.mp3",
        "duration_in_sec": 1842,
        "duration_in_mili_sec": 1842416,
        "time": "00:30:42",
        "length_in_bytes": 11054689,
        "index": 385
    },
    "rukoo05arroom.mp3": {
        "key": "Ar-Room",

        "title": "Surahe Ar-Room",

        "file_name": "rukoo05arroom.mp3",
        "duration_in_sec": 812,
        "duration_in_mili_sec": 811624,
        "time": "00:13:31",
        "length_in_bytes": 4869875,
        "index": 386
    },
    "rukoo06arroom.mp3": {
        "key": "Ar-Room",

        "title": "Surahe Ar-Room",

        "file_name": "rukoo06arroom.mp3",
        "duration_in_sec": 450,
        "duration_in_mili_sec": 450325,
        "time": "00:07:30",
        "length_in_bytes": 2702077,
        "index": 387
    },
    "luqman_intro_.mp3": {
        "key": "Luqman",

        "title": "Surahe Luqman Introduction",

        "file_name": "luqman_intro_.mp3",
        "duration_in_sec": 169,
        "duration_in_mili_sec": 169091,
        "time": "00:02:49",
        "length_in_bytes": 1014672,
        "index": 388
    },
    "rukoo01luqman.mp3": {
        "key": "Luqman",

        "title": "Surahe Luqman",

        "file_name": "rukoo01luqman.mp3",
        "duration_in_sec": 1200,
        "duration_in_mili_sec": 1200379,
        "time": "00:20:00",
        "length_in_bytes": 7202401,
        "index": 389
    },
    "rukoo02luqman.mp3": {
        "key": "Luqman",

        "title": "Surahe Luqman",

        "file_name": "rukoo02luqman.mp3",
        "duration_in_sec": 1432,
        "duration_in_mili_sec": 1432085,
        "time": "00:23:52",
        "length_in_bytes": 8592700,
        "index": 390
    },
    "rukoo03luqman.mp3": {
        "key": "Luqman",

        "title": "Surahe Luqman",

        "file_name": "rukoo03luqman.mp3",
        "duration_in_sec": 998,
        "duration_in_mili_sec": 998191,
        "time": "00:16:38",
        "length_in_bytes": 5989337,
        "index": 391
    },
    "rukoo04luqman.mp3": {
        "key": "Luqman",

        "file_name": "rukoo04luqman.mp3",
        "duration_in_sec": 920,
        "duration_in_mili_sec": 920163,
        "time": "00:15:20",
        "length_in_bytes": 5521108,
        "index": 392
    },
    "as-sijda_intro_.mp3": {
        "key": "As-Sajdah",
        "title": "Surahe As-Sajdah Introduction",

        "file_name": "as-sijda_intro_.mp3",
        "duration_in_sec": 328,
        "duration_in_mili_sec": 327602,
        "time": "00:05:27",
        "length_in_bytes": 1965738,
        "index": 393
    },
    "rukoo01assijda.mp3": {
        "key": "As-Sajdah",

        "title": "Surahe As-Sajdah",

        "file_name": "rukoo01assijda.mp3",
        "duration_in_sec": 2095,
        "duration_in_mili_sec": 2094733,
        "time": "00:34:54",
        "length_in_bytes": 12568589,
        "index": 394
    },
    "rukoo02assijda.mp3": {
        "key": "As-Sajdah",

        "title": "Surahe As-Sajdah",

        "file_name": "rukoo02assijda.mp3",
        "duration_in_sec": 967,
        "duration_in_mili_sec": 967079,
        "time": "00:16:07",
        "length_in_bytes": 5802603,
        "index": 395
    },
    "rukoo03assijda.mp3": {
        "key": "As-Sajdah",

        "title": "Surahe As-Sajdah",

        "file_name": "rukoo03assijda.mp3",
        "duration_in_sec": 555,
        "duration_in_mili_sec": 554684,
        "time": "00:09:14",
        "length_in_bytes": 3328232,
        "index": 396
    },
    "al-ahzab_intro_.mp3": {
        "key": "Al-Ahzab",
        "title": "Surahe Al Ahzab Introduction",

        "file_name": "al-ahzab_intro_.mp3",
        "duration_in_sec": 2391,
        "duration_in_mili_sec": 2391197,
        "time": "00:39:51",
        "length_in_bytes": 7173816,
        "index": 397
    },
    "rukoo01alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo01alahzab.mp3",
        "duration_in_sec": 1580,
        "duration_in_mili_sec": 1579912,
        "time": "00:26:19",
        "length_in_bytes": 9479662,
        "index": 398
    },
    "rukoo02alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo02alahzab.mp3",
        "duration_in_sec": 932,
        "duration_in_mili_sec": 932049,
        "time": "00:15:32",
        "length_in_bytes": 5592422,
        "index": 399
    },
    "rukoo03alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo03alahzab.mp3",
        "duration_in_sec": 820,
        "duration_in_mili_sec": 819696,
        "time": "00:13:39",
        "length_in_bytes": 4918369,
        "index": 400
    },
    "rukoo04alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo04alahzab.mp3",
        "duration_in_sec": 2263,
        "duration_in_mili_sec": 2262727,
        "time": "00:37:42",
        "length_in_bytes": 6788371,
        "index": 401
    },
    "rukoo05alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo05alahzab.mp3",
        "duration_in_sec": 1901,
        "duration_in_mili_sec": 1900617,
        "time": "00:31:40",
        "length_in_bytes": 5702042,
        "index": 402
    },
    "rukoo06alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo06alahzab.mp3",
        "duration_in_sec": 3419,
        "duration_in_mili_sec": 3419429,
        "time": "00:56:59",
        "length_in_bytes": 10258512,
        "index": 403
    },
    "rukoo07alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo07alahzab.mp3",
        "duration_in_sec": 2092,
        "duration_in_mili_sec": 2092304,
        "time": "00:34:52",
        "length_in_bytes": 6277102,
        "index": 404
    },
    "rukoo08alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo08alahzab.mp3",
        "duration_in_sec": 1178,
        "duration_in_mili_sec": 1177678,
        "time": "00:19:37",
        "length_in_bytes": 7066261,
        "index": 405
    },
    "rukoo09alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",

        "file_name": "rukoo09alahzab.mp3",
        "duration_in_sec": 658,
        "duration_in_mili_sec": 657685,
        "time": "00:10:57",
        "length_in_bytes": 3946237,
        "index": 406
    },
    "zameema-alahzab.mp3": {
        "key": "Al-Ahzab",

        "title": "Surahe Al Ahzab",
        "file_name": "zameema-alahzab.mp3",
        "duration_in_sec": 6823,
        "duration_in_mili_sec": 6822740,
        "time": "01:53:42",
        "length_in_bytes": 40936566,
        "index": 407
    },
    "_intro_saba.mp3": {
        "key": "Saba",

        "title": "Surahe Saba Introduction",

        "file_name": "_intro_saba.mp3",
        "duration_in_sec": 152,
        "duration_in_mili_sec": 152163,
        "time": "00:02:32",
        "length_in_bytes": 913108,
        "index": 408
    },
    "rukoo01saba.mp3": {
        "key": "Saba",

        "title": "Surahe Saba",

        "file_name": "rukoo01saba.mp3",
        "duration_in_sec": 1010,
        "duration_in_mili_sec": 1010077,
        "time": "00:16:50",
        "length_in_bytes": 6060588,
        "index": 409
    },
    "rukoo02saba.mp3": {
        "key": "Saba",

        "title": "Surahe Saba",
        "file_name": "rukoo02saba.mp3",
        "duration_in_sec": 3831,
        "duration_in_mili_sec": 3830936,
        "time": "01:03:50",
        "length_in_bytes": 22985839,
        "index": 410
    },
    "rukoo03saba.mp3": {
        "key": "Saba",

        "title": "Surahe Saba",
        "file_name": "rukoo03saba.mp3",
        "duration_in_sec": 938,
        "duration_in_mili_sec": 937639,
        "time": "00:15:37",
        "length_in_bytes": 5625963,
        "index": 411
    },
    "rukoo04saba.mp3": {
        "key": "Saba",

        "title": "Surahe Saba",
        "file_name": "rukoo04saba.mp3",
        "duration_in_sec": 631,
        "duration_in_mili_sec": 630648,
        "time": "00:10:30",
        "length_in_bytes": 3784017,
        "index": 412
    },
    "rukoo05saba.mp3": {
        "key": "Saba",

        "title": "Surahe Saba",
        "file_name": "rukoo05saba.mp3",
        "duration_in_sec": 747,
        "duration_in_mili_sec": 747233,
        "time": "00:12:27",
        "length_in_bytes": 4483587,
        "index": 413
    },
    "rukoo06saba.mp3": {
        "key": "Saba",

        "title": "Surahe Saba",
        "file_name": "rukoo06saba.mp3",
        "duration_in_sec": 605,
        "duration_in_mili_sec": 605127,
        "time": "00:10:05",
        "length_in_bytes": 3630887,
        "index": 414
    },
    "fatir_intro_.mp3": {
        "key": "Fatir",

        "title": "Surahe Fatir Introduction",
        "file_name": "fatir_intro_.mp3",
        "duration_in_sec": 230,
        "duration_in_mili_sec": 229956,
        "time": "00:03:49",
        "length_in_bytes": 1379864,
        "index": 415
    },
    "rukoo01fatir.mp3": {
        "key": "Fatir",

        "title": "Surahe Fatir",
        "file_name": "rukoo01fatir.mp3",
        "duration_in_sec": 680,
        "duration_in_mili_sec": 679628,
        "time": "00:11:19",
        "length_in_bytes": 4077958,
        "index": 416
    },
    "rukoo02fatir.mp3": {
        "key": "Fatir",

        "title": "Surahe Fatir",
        "file_name": "rukoo02fatir.mp3",
        "duration_in_sec": 1184,
        "duration_in_mili_sec": 1183687,
        "time": "00:19:43",
        "length_in_bytes": 7102247,
        "index": 417
    },
    "rukoo03fatir.mp3": {
        "key": "Fatir",

        "title": "Surahe Fatir",
        "file_name": "rukoo03fatir.mp3",
        "duration_in_sec": 752,
        "duration_in_mili_sec": 751517,
        "time": "00:12:31",
        "length_in_bytes": 4509291,
        "index": 418
    },
    "rukoo04fatir.mp3": {
        "key": "Fatir",

        "title": "Surahe Fatir",
        "file_name": "rukoo04fatir.mp3",
        "duration_in_sec": 1405,
        "duration_in_mili_sec": 1405100,
        "time": "00:23:25",
        "length_in_bytes": 8430730,
        "index": 419
    },
    "rukoo05fatir.mp3": {
        "key": "Fatir",

        "title": "Surahe Fatir",
        "file_name": "rukoo05fatir.mp3",
        "duration_in_sec": 681,
        "duration_in_mili_sec": 680829,
        "time": "00:11:20",
        "length_in_bytes": 4085104,
        "index": 420
    },
    "_intro_yaaseen.mp3": {
        "key": "Yaa-Seen",

        "title": "Surahe Yaa-Seen Introduction",

        "file_name": "_intro_yaaseen.mp3",
        "duration_in_sec": 175,
        "duration_in_mili_sec": 174602,
        "time": "00:02:54",
        "length_in_bytes": 1047743,
        "index": 421
    },
    "rukoo01yaaseen.mp3": {
        "key": "Yaa-Seen",
        "title": "Surahe Yaa-Seen",

        "file_name": "rukoo01yaaseen.mp3",
        "duration_in_sec": 815,
        "duration_in_mili_sec": 814968,
        "time": "00:13:34",
        "length_in_bytes": 4889937,
        "index": 422
    },
    "rukoo02yaaseen.mp3": {
        "key": "Yaa-Seen",
        "title": "Surahe Yaa-Seen",

        "file_name": "rukoo02yaaseen.mp3",
        "duration_in_sec": 1647,
        "duration_in_mili_sec": 1647099,
        "time": "00:27:27",
        "length_in_bytes": 9882784,
        "index": 423
    },
    "rukoo03yaaseen.mp3": {
        "key": "Yaa-Seen",
        "title": "Surahe Yaa-Seen",

        "file_name": "rukoo03yaaseen.mp3",
        "duration_in_sec": 2044,
        "duration_in_mili_sec": 2043716,
        "time": "00:34:03",
        "length_in_bytes": 12262487,
        "index": 424
    },
    "rukoo04yaaseen.mp3": {
        "key": "Yaa-Seen",
        "title": "Surahe Yaa-Seen",

        "file_name": "rukoo04yaaseen.mp3",
        "duration_in_sec": 939,
        "duration_in_mili_sec": 939128,
        "time": "00:15:39",
        "length_in_bytes": 5634897,
        "index": 425
    },
    "rukoo05yaaseen.mp3": {
        "key": "Yaa-Seen",
        "title": "Surahe Yaa-Seen",

        "file_name": "rukoo05yaaseen.mp3",
        "duration_in_sec": 809,
        "duration_in_mili_sec": 808725,
        "time": "00:13:28",
        "length_in_bytes": 4852477,
        "index": 426
    },
    "as-saaffat_intro_.mp3": {
        "key": "As-Saaffat",
        "title": "Surahe As-Saaffat Introduction",

        "file_name": "as-saaffat_intro_.mp3",
        "duration_in_sec": 277,
        "duration_in_mili_sec": 277473,
        "time": "00:04:37",
        "length_in_bytes": 1664964,
        "index": 427
    },
    "rukoo01saaffat.mp3": {
        "key": "As-Saaffat",

        "title": "Surahe As-Saaffat",

        "file_name": "rukoo01saaffat.mp3",
        "duration_in_sec": 1124,
        "duration_in_mili_sec": 1124127,
        "time": "00:18:44",
        "length_in_bytes": 6744892,
        "index": 428
    },
    "rukoo02saaffat.mp3": {
        "key": "As-Saaffat",

        "title": "Surahe As-Saaffat",

        "file_name": "rukoo02saaffat.mp3",
        "duration_in_sec": 1636,
        "duration_in_mili_sec": 1636101,
        "time": "00:27:16",
        "length_in_bytes": 9816798,
        "index": 429
    },
    "rukoo03saaffat.mp3": {
        "key": "As-Saaffat",

        "title": "Surahe As-Saaffat",

        "file_name": "rukoo03saaffat.mp3",
        "duration_in_sec": 2414,
        "duration_in_mili_sec": 2414237,
        "time": "00:40:14",
        "length_in_bytes": 14485611,
        "index": 430
    },
    "rukoo04saaffat.mp3": {
        "key": "As-Saaffat",

        "title": "Surahe As-Saaffat",

        "file_name": "rukoo04saaffat.mp3",
        "duration_in_sec": 1125,
        "duration_in_mili_sec": 1125120,
        "time": "00:18:45",
        "length_in_bytes": 6750848,
        "index": 431
    },
    "rukoo05saaffat.mp3": {
        "key": "As-Saaffat",

        "title": "Surahe As-Saaffat",

        "file_name": "rukoo05saaffat.mp3",
        "duration_in_sec": 1577,
        "duration_in_mili_sec": 1576647,
        "time": "00:26:16",
        "length_in_bytes": 9460070,
        "index": 432
    },
    "intro_suad_.mp3": {
        "key": "Suad",

        "title": "Surahe Suad Introduction",

        "file_name": "intro_suad_.mp3",
        "duration_in_sec": 627,
        "duration_in_mili_sec": 627200,
        "time": "00:10:27",
        "length_in_bytes": 3763328,
        "index": 433
    },
    "rukoo01suad.mp3": {
        "key": "Suad",
        "title": "Surahe Suad",

        "file_name": "rukoo01suad.mp3",
        "duration_in_sec": 797,
        "duration_in_mili_sec": 797127,
        "time": "00:13:17",
        "length_in_bytes": 4782950,
        "index": 434
    },
    "rukoo02suad.mp3": {
        "key": "Suad",
        "title": "Surahe Suad",

        "file_name": "rukoo02suad.mp3",
        "duration_in_sec": 1918,
        "duration_in_mili_sec": 1917910,
        "time": "00:31:57",
        "length_in_bytes": 11507652,
        "index": 435
    },
    "rukoo03suad.mp3": {
        "key": "Suad",
        "title": "Surahe Suad",
        "file_name": "rukoo03suad.mp3",
        "duration_in_sec": 2012,
        "duration_in_mili_sec": 2012447,
        "time": "00:33:32",
        "length_in_bytes": 12074875,
        "index": 436
    },
    "rukoo04suad.mp3": {
        "key": "Suad",
        "title": "Surahe Suad",
        "file_name": "rukoo04suad.mp3",
        "duration_in_sec": 1465,
        "duration_in_mili_sec": 1464790,
        "time": "00:24:24",
        "length_in_bytes": 8788932,
        "index": 437
    },
    "rukoo05suad.mp3": {
        "key": "Suad",
        "title": "Surahe Suad",
        "file_name": "rukoo05suad.mp3",
        "duration_in_sec": 929,
        "duration_in_mili_sec": 928731,
        "time": "00:15:28",
        "length_in_bytes": 5572517,
        "index": 438
    },
    "az-zumar_intro_.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar Introduction",

        "file_name": "az-zumar_intro_.mp3",
        "duration_in_sec": 147,
        "duration_in_mili_sec": 146913,
        "time": "00:02:26",
        "length_in_bytes": 881604,
        "index": 439
    },
    "rukoo01zumar.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar",

        "file_name": "rukoo01zumar.mp3",
        "duration_in_sec": 1934,
        "duration_in_mili_sec": 1934367,
        "time": "00:32:14",
        "length_in_bytes": 11606395,
        "index": 440
    },
    "rukoo02zumar.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar",

        "file_name": "rukoo02zumar.mp3",
        "duration_in_sec": 732,
        "duration_in_mili_sec": 731611,
        "time": "00:12:11",
        "length_in_bytes": 4389797,
        "index": 441
    },
    "rukoo03zumar.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar",

        "file_name": "rukoo03zumar.mp3",
        "duration_in_sec": 1250,
        "duration_in_mili_sec": 1249620,
        "time": "00:20:49",
        "length_in_bytes": 7497909,
        "index": 442
    },
    "rukoo04zumar.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar",

        "file_name": "rukoo04zumar.mp3",
        "duration_in_sec": 638,
        "duration_in_mili_sec": 638485,
        "time": "00:10:38",
        "length_in_bytes": 3831037,
        "index": 443
    },
    "rukoo05zumar.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar",

        "file_name": "rukoo05zumar.mp3",
        "duration_in_sec": 770,
        "duration_in_mili_sec": 770377,
        "time": "00:12:50",
        "length_in_bytes": 4622391,
        "index": 444
    },
    "rukoo06zumar.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar",

        "file_name": "rukoo06zumar.mp3",
        "duration_in_sec": 522,
        "duration_in_mili_sec": 521744,
        "time": "00:08:41",
        "length_in_bytes": 3130590,
        "index": 445
    },
    "rukoo07zumar.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar",

        "file_name": "rukoo07zumar.mp3",
        "duration_in_sec": 455,
        "duration_in_mili_sec": 454870,
        "time": "00:07:34",
        "length_in_bytes": 2729349,
        "index": 446
    },
    "rukoo08zumar.mp3": {
        "key": "Az-Zumar",
        "title": "Surahe Az-Zumar",

        "file_name": "rukoo08zumar.mp3",
        "duration_in_sec": 315,
        "duration_in_mili_sec": 314802,
        "time": "00:05:14",
        "length_in_bytes": 1888938,
        "index": 447
    },
    "al-momin_intro_.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin Introduction",

        "file_name": "al-momin_intro_.mp3",
        "duration_in_sec": 437,
        "duration_in_mili_sec": 437185,
        "time": "00:07:17",
        "length_in_bytes": 2623240,
        "index": 448
    },
    "rukoo01momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",

        "file_name": "rukoo01momin.mp3",
        "duration_in_sec": 1227,
        "duration_in_mili_sec": 1226527,
        "time": "00:20:26",
        "length_in_bytes": 7359292,
        "index": 449
    },
    "rukoo02momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",

        "file_name": "rukoo02momin.mp3",
        "duration_in_sec": 1104,
        "duration_in_mili_sec": 1103517,
        "time": "00:18:23",
        "length_in_bytes": 6621291,
        "index": 450
    },
    "rukoo03momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",

        "file_name": "rukoo03momin.mp3",
        "duration_in_sec": 905,
        "duration_in_mili_sec": 905300,
        "time": "00:15:05",
        "length_in_bytes": 5431926,
        "index": 451
    },
    "rukoo04momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",

        "file_name": "rukoo04momin.mp3",
        "duration_in_sec": 887,
        "duration_in_mili_sec": 886753,
        "time": "00:14:46",
        "length_in_bytes": 5320707,
        "index": 452
    },
    "rukoo05momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",

        "file_name": "rukoo05momin.mp3",
        "duration_in_sec": 880,
        "duration_in_mili_sec": 880065,
        "time": "00:14:40",
        "length_in_bytes": 5280520,
        "index": 453
    },
    "rukoo06momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",

        "file_name": "rukoo06momin.mp3",
        "duration_in_sec": 1647,
        "duration_in_mili_sec": 1647256,
        "time": "00:27:27",
        "length_in_bytes": 9883724,
        "index": 454
    },
    "rukoo07momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",

        "file_name": "rukoo07momin.mp3",
        "duration_in_sec": 858,
        "duration_in_mili_sec": 858044,
        "time": "00:14:18",
        "length_in_bytes": 5148455,
        "index": 455
    },
    "rukoo08momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",
        "file_name": "rukoo08momin.mp3",
        "duration_in_sec": 513,
        "duration_in_mili_sec": 512627,
        "time": "00:08:32",
        "length_in_bytes": 3075890,
        "index": 456
    },
    "rukoo09momin.mp3": {
        "key": "Al-Momin",
        "title": "Surahe Al-Momin",

        "file_name": "rukoo09momin.mp3",
        "duration_in_sec": 488,
        "duration_in_mili_sec": 487758,
        "time": "00:08:07",
        "length_in_bytes": 2926678,
        "index": 457
    },
    "hameemas-sijda_intro_.mp3": {
        "key": "As-Sijda",
        "title": "Surahe As-Sijda Introduction",

        "file_name": "hameemas-sijda_intro_.mp3",
        "duration_in_sec": 900,
        "duration_in_mili_sec": 899866,
        "time": "00:14:59",
        "length_in_bytes": 5399388,
        "index": 458
    },
    "rukoo01hameemassijda.mp3": {
        "key": "As-Sijda",

        "title": "Surahe As-Sijda",

        "file_name": "rukoo01hameemassijda.mp3",
        "duration_in_sec": 722,
        "duration_in_mili_sec": 721868,
        "time": "00:12:01",
        "length_in_bytes": 4331335,
        "index": 459
    },
    "rukoo02hameemassijda.mp3": {
        "key": "As-Sijda",

        "title": "Surahe As-Sijda",

        "file_name": "rukoo02hameemassijda.mp3",
        "duration_in_sec": 1579,
        "duration_in_mili_sec": 1578893,
        "time": "00:26:18",
        "length_in_bytes": 9473549,
        "index": 460
    },
    "rukoo03hameemassijda.mp3": {
        "key": "As-Sijda",

        "title": "Surahe As-Sijda",

        "file_name": "rukoo03hameemassijda.mp3",
        "duration_in_sec": 735,
        "duration_in_mili_sec": 735112,
        "time": "00:12:15",
        "length_in_bytes": 4410799,
        "index": 461
    },
    "rukoo04hameemassijda.mp3": {
        "key": "As-Sijda",

        "title": "Surahe As-Sijda",

        "file_name": "rukoo04hameemassijda.mp3",
        "duration_in_sec": 670,
        "duration_in_mili_sec": 669936,
        "time": "00:11:09",
        "length_in_bytes": 4019746,
        "index": 462
    },
    "rukoo05hameemassijda.mp3": {
        "key": "As-Sijda",

        "title": "Surahe As-Sijda",

        "file_name": "rukoo05hameemassijda.mp3",
        "duration_in_sec": 1838,
        "duration_in_mili_sec": 1837819,
        "time": "00:30:37",
        "length_in_bytes": 11027104,
        "index": 463
    },
    "rukoo06hameemassijda.mp3": {
        "key": "As-Sijda",

        "title": "Surahe As-Sijda",

        "file_name": "rukoo06hameemassijda.mp3",
        "duration_in_sec": 1432,
        "duration_in_mili_sec": 1432059,
        "time": "00:23:52",
        "length_in_bytes": 8592544,
        "index": 464
    },
    "ash-shoora_intro_.mp3": {
        "key": "Ash-Shoora",

        "title": "Surahe Ash-Shoora Introduction",
 
        "file_name": "ash-shoora_intro_.mp3",
        "duration_in_sec": 659,
        "duration_in_mili_sec": 658599,
        "time": "00:10:58",
        "length_in_bytes": 3951723,
        "index": 465
    },
    "rukoo01ashshoora.mp3": {
        "key": "Ash-Shoora",

        "title": "Surahe Ash-Shoora",

        "file_name": "rukoo01ashshoora.mp3",
        "duration_in_sec": 1403,
        "duration_in_mili_sec": 1403167,
        "time": "00:23:23",
        "length_in_bytes": 8419195,
        "index": 466
    },
    "rukoo02ashshoora.mp3": {
        "key": "Ash-Shoora",

        "title": "Surahe Ash-Shoora",

        "file_name": "rukoo02ashshoora.mp3",
        "duration_in_sec": 3329,
        "duration_in_mili_sec": 3329489,
        "time": "00:55:29",
        "length_in_bytes": 19977160,
        "index": 467
    },
    "rukoo03ashshoora.mp3": {
        "key": "Ash-Shoora",

        "title": "Surahe Ash-Shoora",

        "file_name": "rukoo03ashshoora.mp3",
        "duration_in_sec": 1523,
        "duration_in_mili_sec": 1523461,
        "time": "00:25:23",
        "length_in_bytes": 9140958,
        "index": 468
    },
    "rukoo04ashshoora.mp3": {
        "key": "Ash-Shoora",

        "title": "Surahe Ash-Shoora",

        "file_name": "rukoo04ashshoora.mp3",
        "duration_in_sec": 1692,
        "duration_in_mili_sec": 1692343,
        "time": "00:28:12",
        "length_in_bytes": 10154248,
        "index": 469
    },
    "rukoo05ashshoora.mp3": {
        "key": "Ash-Shoora",

        "title": "Surahe Ash-Shoora",

        "file_name": "rukoo05ashshoora.mp3",
        "duration_in_sec": 1249,
        "duration_in_mili_sec": 1249228,
        "time": "00:20:49",
        "length_in_bytes": 7495495,
        "index": 470
    },
    "az-zukhruf_intro_.mp3": {
        "key": "Az-Zukhruf",

        "title": "Surahe Az-Zukhruf Intoduction",

        "file_name": "az-zukhruf_intro_.mp3",
        "duration_in_sec": 423,
        "duration_in_mili_sec": 422844,
        "time": "00:07:02",
        "length_in_bytes": 2537192,
        "index": 471
    },
    "rukoo01zukhruf.mp3": {
        "key": "Az-Zukhruf",
        "title": "Surahe Az-Zukhruf",

        "file_name": "rukoo01zukhruf.mp3",
        "duration_in_sec": 1673,
        "duration_in_mili_sec": 1673430,
        "time": "00:27:53",
        "length_in_bytes": 10040772,
        "index": 472
    },
    "rukoo02zukhruf.mp3": {
        "key": "Az-Zukhruf",
        "title": "Surahe Az-Zukhruf",

        "file_name": "rukoo02zukhruf.mp3",
        "duration_in_sec": 840,
        "duration_in_mili_sec": 839811,
        "time": "00:13:59",
        "length_in_bytes": 5038992,
        "index": 473
    },
    "rukoo03zukhruf.mp3": {
        "key": "Az-Zukhruf",
        "title": "Surahe Az-Zukhruf",

        "file_name": "rukoo03zukhruf.mp3",
        "duration_in_sec": 865,
        "duration_in_mili_sec": 864940,
        "time": "00:14:24",
        "length_in_bytes": 5189833,
        "index": 474
    },
    "rukoo04zukhruf.mp3": {
        "key": "Az-Zukhruf",
        "title": "Surahe Az-Zukhruf",

        "file_name": "rukoo04zukhruf.mp3",
        "duration_in_sec": 462,
        "duration_in_mili_sec": 462184,
        "time": "00:07:42",
        "length_in_bytes": 2773235,
        "index": 475
    },
    "rukoo05zukhruf.mp3": {
        "key": "Az-Zukhruf",
        "title": "Surahe Az-Zukhruf",

        "file_name": "rukoo05zukhruf.mp3",
        "duration_in_sec": 1160,
        "duration_in_mili_sec": 1159523,
        "time": "00:19:19",
        "length_in_bytes": 6957331,
        "index": 476
    },
    "rukoo06zukhruf.mp3": {
        "key": "Az-Zukhruf",
        "title": "Surahe Az-Zukhruf",

        "file_name": "rukoo06zukhruf.mp3",
        "duration_in_sec": 655,
        "duration_in_mili_sec": 654994,
        "time": "00:10:54",
        "length_in_bytes": 3930094,
        "index": 477
    },
    "rukoo07zukhruf.mp3": {
        "key": "Az-Zukhruf",
        "title": "Surahe Az-Zukhruf",

        "file_name": "rukoo07zukhruf.mp3",
        "duration_in_sec": 1003,
        "duration_in_mili_sec": 1002841,
        "time": "00:16:42",
        "length_in_bytes": 6017173,
        "index": 478
    },
    "ad-dukhan_intro_.mp3": {
        "key": "Ad-Dukhan",
        "title": "Surahe Ad-Dukhan Introduction",

        "file_name": "ad-dukhan_intro_.mp3",
        "duration_in_sec": 495,
        "duration_in_mili_sec": 495491,
        "time": "00:08:15",
        "length_in_bytes": 2973072,
        "index": 479
    },
    "rukoo01dukhan.mp3": {
        "key": "Ad-Dukhan",

        "title": "Surahe Ad-Dukhan",

        "file_name": "rukoo01dukhan.mp3",
        "duration_in_sec": 2105,
        "duration_in_mili_sec": 2104503,
        "time": "00:35:04",
        "length_in_bytes": 12627208,
        "index": 480
    },
    "rukoo02dukhan.mp3": {
        "key": "Ad-Dukhan",

        "title": "Surahe Ad-Dukhan",

        "file_name": "rukoo02dukhan.mp3",
        "duration_in_sec": 672,
        "duration_in_mili_sec": 672209,
        "time": "00:11:12",
        "length_in_bytes": 4033382,
        "index": 481
    },
    "rukoo03dukhan.mp3": {
        "key": "Ad-Dukhan",

        "title": "Surahe Ad-Dukhan",

        "file_name": "rukoo03dukhan.mp3",
        "duration_in_sec": 526,
        "duration_in_mili_sec": 526472,
        "time": "00:08:46",
        "length_in_bytes": 3159022,
        "index": 482
    },
    "al-jasiya_intro_.mp3": {
        "key": "Al Jasiya",
        "title": "Surahe Al Jasiya Introduction",

        "file_name": "al-jasiya_intro_.mp3",
        "duration_in_sec": 457,
        "duration_in_mili_sec": 457038,
        "time": "00:07:37",
        "length_in_bytes": 2742358,
        "index": 483
    },
    "rukoo01aljasiya.mp3": {
        "key": "Al Jasiya",

        "title": "Surahe Al Jasiya",

        "file_name": "rukoo01aljasiya.mp3",
        "duration_in_sec": 990,
        "duration_in_mili_sec": 990302,
        "time": "00:16:30",
        "length_in_bytes": 5941940,
        "index": 484
    },
    "rukoo02aljaysia.mp3": {
        "key": "Al Jasiya",

        "title": "Surahe Al Jasiya",

        "file_name": "rukoo02aljaysia.mp3",
        "duration_in_sec": 938,
        "duration_in_mili_sec": 938031,
        "time": "00:15:38",
        "length_in_bytes": 5628377,
        "index": 485
    },
    "rukoo03aljasiya.mp3": {
        "key": "Al Jasiya",

        "title": "Surahe Al Jasiya",

        "file_name": "rukoo03aljasiya.mp3",
        "duration_in_sec": 837,
        "duration_in_mili_sec": 837146,
        "time": "00:13:57",
        "length_in_bytes": 5023005,
        "index": 486
    },
    "rukoo04aljasiya.mp3": {
        "key": "Al Jasiya",

        "title": "Surahe Al Jasiya",

        "file_name": "rukoo04aljasiya.mp3",
        "duration_in_sec": 566,
        "duration_in_mili_sec": 566100,
        "time": "00:09:26",
        "length_in_bytes": 3396726,
        "index": 487
    },
    "al-ahqaf_intro_.mp3": {
        "key": "Al Ahqaf",

        "title": "Surahe Al Ahqaf Introduction",

        "file_name": "al-ahqaf_intro_.mp3",
        "duration_in_sec": 633,
        "duration_in_mili_sec": 633339,
        "time": "00:10:33",
        "length_in_bytes": 3800161,
        "index": 488
    },
    "rukoo01alahqaf.mp3": {
        "key": "Al Ahqaf",

        "title": "Surahe Al Ahqaf",

        "file_name": "rukoo01alahqaf.mp3",
        "duration_in_sec": 1684,
        "duration_in_mili_sec": 1684402,
        "time": "00:28:04",
        "length_in_bytes": 10106601,
        "index": 489
    },
    "rukoo02alahqaf.mp3": {
        "key": "Al Ahqaf",

        "title": "Surahe Al Ahqaf",

        "file_name": "rukoo02alahqaf.mp3",
        "duration_in_sec": 1197,
        "duration_in_mili_sec": 1196800,
        "time": "00:19:56",
        "length_in_bytes": 7180991,
        "index": 490
    },
    "rukoo03alahqaf.mp3": {
        "key": "Al Ahqaf",

        "title": "Surahe Al Ahqaf",

        "file_name": "rukoo03alahqaf.mp3",
        "duration_in_sec": 658,
        "duration_in_mili_sec": 658077,
        "time": "00:10:58",
        "length_in_bytes": 3948588,
        "index": 491
    },
    "rukoo04alahqaf.mp3": {
        "key": "Al Ahqaf",

        "title": "Surahe Al Ahqaf",

        "file_name": "rukoo04alahqaf.mp3",
        "duration_in_sec": 765,
        "duration_in_mili_sec": 764578,
        "time": "00:12:44",
        "length_in_bytes": 4587596,
        "index": 492
    },
    "_intro_mohammad.mp3": {
        "key": "Mohammad",

        "title": "Surahe Mohammad Introduction",

        "file_name": "_intro_mohammad.mp3",
        "duration_in_sec": 415,
        "duration_in_mili_sec": 414877,
        "time": "00:06:54",
        "length_in_bytes": 2489388,
        "index": 493
    },
    "rukoo01mohammad.mp3": {
        "key": "Mohammad",
        "title": "Surahe Mohammad",

        "file_name": "rukoo01mohammad.mp3",
        "duration_in_sec": 2432,
        "duration_in_mili_sec": 2432496,
        "time": "00:40:32",
        "length_in_bytes": 14595169,
        "index": 494
    },
    "rukoo02mohammad.mp3": {
        "key": "Mohammad",
        "title": "Surahe Mohammad",

        "file_name": "rukoo02mohammad.mp3",
        "duration_in_sec": 966,
        "duration_in_mili_sec": 965825,
        "time": "00:16:05",
        "length_in_bytes": 5795143,
        "index": 495
    },
    "rukoo03mohammad.mp3": {
        "key": "Mohammad",
        "title": "Surahe Mohammad",

        "file_name": "rukoo03mohammad.mp3",
        "duration_in_sec": 748,
        "duration_in_mili_sec": 748434,
        "time": "00:12:28",
        "length_in_bytes": 4490734,
        "index": 496
    },
    "rukoo04mohammad.mp3": {
        "key": "Mohammad",
        "title": "Surahe Mohammad",

        "file_name": "rukoo04mohammad.mp3",
        "duration_in_sec": 480,
        "duration_in_mili_sec": 480209,
        "time": "00:08:00",
        "length_in_bytes": 2881382,
        "index": 497
    },
    "al-fatah_intro_.mp3": {
        "key": "Mohammad", 
        "title": "Surahe Al Fatah Introduction",

        "file_name": "al-fatah_intro_.mp3",
        "duration_in_sec": 1582,
        "duration_in_mili_sec": 1582028,
        "time": "00:26:22",
        "length_in_bytes": 9492358,
        "index": 498
    },
    "rukoo01fatah.mp3": {
        "key": "Al Fatah", 

        "title": "Surahe Al Fatah",

        "file_name": "rukoo01fatah.mp3",
        "duration_in_sec": 1552,
        "duration_in_mili_sec": 1552144,
        "time": "00:25:52",
        "length_in_bytes": 9313053,
        "index": 499
    },
    "rukoo02fatah.mp3": {
        "key": "Al Fatah", 

        "title": "Surahe Al Fatah",

        "file_name": "rukoo02fatah.mp3",
        "duration_in_sec": 988,
        "duration_in_mili_sec": 988343,
        "time": "00:16:28",
        "length_in_bytes": 5930185,
        "index": 500
    },
    "rukoo03fatah.mp3": {
        "key": "Al Fatah", 

        "title": "Surahe Al Fatah",

        "file_name": "rukoo03fatah.mp3",
        "duration_in_sec": 1375,
        "duration_in_mili_sec": 1375478,
        "time": "00:22:55",
        "length_in_bytes": 8252993,
        "index": 501
    },
    "rukoo04fatah.mp3": {
        "key": "Al Fatah", 

        "title": "Surahe Al Fatah",

        "file_name": "rukoo04fatah.mp3",
        "duration_in_sec": 976,
        "duration_in_mili_sec": 975752,
        "time": "00:16:15",
        "length_in_bytes": 5854702,
        "index": 502
    },
    "al-hujurat_intro_.mp3": {
        "key": "Al Fatah", 

        "title": "Surahe Al Hujurat Introduction",

        "file_name": "al-hujurat_intro_.mp3",
        "duration_in_sec": 251,
        "duration_in_mili_sec": 251220,
        "time": "00:04:11",
        "length_in_bytes": 1507446,
        "index": 503
    },
    "rukoo01al-hujurat.mp3": {
        "key": "Al Hujurat",
        "title": "Surahe Al Hujurat",

        "file_name": "rukoo01al-hujurat.mp3",
        "duration_in_sec": 3136,
        "duration_in_mili_sec": 3135634,
        "time": "00:52:15",
        "length_in_bytes": 18814032,
        "index": 504
    },
    "rukoo02al-hujurat.mp3": {
        "key": "Al Hujurat",

        "title": "Surahe Al Hujurat",

        "file_name": "rukoo02al-hujurat.mp3",
        "duration_in_sec": 3871,
        "duration_in_mili_sec": 3870616,
        "time": "01:04:30",
        "length_in_bytes": 23223919,
        "index": 505
    },
    "_intro_qaff.mp3": {
        "key": "Qaff",

        "title": "Surahe Qaff introduction",

        "file_name": "_intro_qaff.mp3",
        "duration_in_sec": 266,
        "duration_in_mili_sec": 265691,
        "time": "00:04:25",
        "length_in_bytes": 1594277,
        "index": 506
    },
    "rukoo01qaff.mp3": {
        "key": "Qaff",
        "title": "Surahe Qaff",

        "file_name": "rukoo01qaff.mp3",
        "duration_in_sec": 1740,
        "duration_in_mili_sec": 1740225,
        "time": "00:29:00",
        "length_in_bytes": 10441543,
        "index": 507
    },
    "rukoo02qaff.mp3": {
        "key": "Qaff",
        "title": "Surahe Qaff",

        "file_name": "rukoo02qaff.mp3",
        "duration_in_sec": 1031,
        "duration_in_mili_sec": 1030609,
        "time": "00:17:10",
        "length_in_bytes": 6183782,
        "index": 508
    },
    "rukoo03qaff.mp3": {
        "key": "Qaff",
        "title": "Surahe Qaff",

        "file_name": "rukoo03qaff.mp3",
        "duration_in_sec": 1504,
        "duration_in_mili_sec": 1503765,
        "time": "00:25:03",
        "length_in_bytes": 9022717,
        "index": 509
    },
    "az-zariyat_intro_.mp3": {
        "key": "Az Zariayt",
        "title": "Surahe Az Zariayt Introudction",

        "file_name": "az-zariyat_intro_.mp3",
        "duration_in_sec": 270,
        "duration_in_mili_sec": 269845,
        "time": "00:04:29",
        "length_in_bytes": 1619197,
        "index": 510
    },
    "rukoo01az-zariyat.mp3": {
        "key": "Az Zariayt",
        "title": "Surahe Az Zariayt",

        "file_name": "rukoo01az-zariyat.mp3",
        "duration_in_sec": 2557,
        "duration_in_mili_sec": 2557492,
        "time": "00:42:37",
        "length_in_bytes": 15345144,
        "index": 511
    },
    "rukoo02az-zariyat.mp3": {
        "key": "Az Zariayt",
        "title": "Surahe Az Zariayt",


        "file_name": "rukoo02az-zariyat.mp3",
        "duration_in_sec": 1497,
        "duration_in_mili_sec": 1497339,
        "time": "00:24:57",
        "length_in_bytes": 8984224,
        "index": 512
    },
    "rukoo03az-zariyat.mp3": {
        "key": "Az Zariayt",
        "title": "Surahe Az Zariayt",

        "file_name": "rukoo03az-zariyat.mp3",
        "duration_in_sec": 1394,
        "duration_in_mili_sec": 1393946,
        "time": "00:23:13",
        "length_in_bytes": 8363868,
        "index": 513
    },
    "at-toor_intro_.mp3": {
        "key": "At Toor",
        "title": "Surahe At Toor Introduction",

        "file_name": "at-toor_intro_.mp3",
        "duration_in_sec": 238,
        "duration_in_mili_sec": 238106,
        "time": "00:03:58",
        "length_in_bytes": 1428765,
        "index": 514
    },
    "rukoo01attoor.mp3": {
        "key": "At Toor",

        "title": "Surahe At Toor",

        "file_name": "rukoo01attoor.mp3",
        "duration_in_sec": 2101,
        "duration_in_mili_sec": 2101447,
        "time": "00:35:01",
        "length_in_bytes": 12608870,
        "index": 515
    },
    "rukoo02attoor.mp3": {
        "key": "At Toor",

        "title": "Surahe At Toor",

        "file_name": "rukoo02attoor.mp3",
        "duration_in_sec": 2894,
        "duration_in_mili_sec": 2893531,
        "time": "00:48:13",
        "length_in_bytes": 17361380,
        "index": 516
    },
    "an-najm_intro_.mp3": {
        "key": "An Najm",

        "title": "Surahe An Najm Introduction",

        "file_name": "an-najm_intro_.mp3",
        "duration_in_sec": 667,
        "duration_in_mili_sec": 667298,
        "time": "00:11:07",
        "length_in_bytes": 4003916,
        "index": 517
    },
    "rukoo01an-najm.mp3": {
        "key": "An Najm",
        "title": "Surahe An Najm",

        "file_name": "rukoo01an-najm.mp3",
        "duration_in_sec": 3773,
        "duration_in_mili_sec": 3773388,
        "time": "01:02:53",
        "length_in_bytes": 22640553,
        "index": 518
    },
    "rukoo02an-najm.mp3": {
        "key": "An Najm",
        "title": "Surahe An Najm",

        "file_name": "rukoo02an-najm.mp3",
        "duration_in_sec": 947,
        "duration_in_mili_sec": 946860,
        "time": "00:15:46",
        "length_in_bytes": 5681290,
        "index": 519
    },
    "rukoo03an-najm.mp3": {
        "key": "An Najm",
        "title": "Surahe An Najm",

        "file_name": "rukoo03an-najm.mp3",
        "duration_in_sec": 2360,
        "duration_in_mili_sec": 2359589,
        "time": "00:39:19",
        "length_in_bytes": 14157722,
        "index": 520
    },
    "al-qamar_intro_.mp3": {
        "key": "Al Qamar",
        "title": "Surahe Al Qamar Introduction",

        "file_name": "al-qamar_intro_.mp3",
        "duration_in_sec": 280,
        "duration_in_mili_sec": 280451,
        "time": "00:04:40",
        "length_in_bytes": 1682832,
        "index": 521
    },
    "rukoo01al-qamar.mp3": {
        "key": "Al Qamar",
        "title": "Surahe Al Qamar",

        "file_name": "rukoo01al-qamar.mp3",
        "duration_in_sec": 1708,
        "duration_in_mili_sec": 1707546,
        "time": "00:28:27",
        "length_in_bytes": 10245468,
        "index": 522
    },
    "rukoo02al-qamar.mp3": {
        "key": "Al Qamar",
        "title": "Surahe Al Qamar",

        "file_name": "rukoo02al-qamar.mp3",
        "duration_in_sec": 649,
        "duration_in_mili_sec": 648986,
        "time": "00:10:48",
        "length_in_bytes": 3894045,
        "index": 523
    },
    "rukoo03al-qamar.mp3": {
        "key": "Al Qamar",
        "title": "Surahe Al Qamar",

        "file_name": "rukoo03al-qamar.mp3",
        "duration_in_sec": 448,
        "duration_in_mili_sec": 447504,
        "time": "00:07:27",
        "length_in_bytes": 2685213,
        "index": 524
    },
    "ar-rahman_intro_.mp3": {
        "key": "Ar Rahman",
        "title": "Surahe Ar Rahman Introduction",

        "file_name": "ar-rahman_intro_.mp3",
        "duration_in_sec": 696,
        "duration_in_mili_sec": 695771,
        "time": "00:11:35",
        "length_in_bytes": 4174757,
        "index": 525
    },
    "rukoo01rahman.mp3": {
        "key": "Ar Rahman",

        "title": "Surahe Ar Rahman",

        "file_name": "rukoo01rahman.mp3",
        "duration_in_sec": 2737,
        "duration_in_mili_sec": 2737136,
        "time": "00:45:37",
        "length_in_bytes": 16423009,
        "index": 526
    },
    "rukoo02rahman.mp3": {
        "key": "Ar Rahman",

        "title": "Surahe Ar Rahman",

        "file_name": "rukoo02rahman.mp3",
        "duration_in_sec": 1313,
        "duration_in_mili_sec": 1313071,
        "time": "00:21:53",
        "length_in_bytes": 7878554,
        "index": 527
    },
    "rukoo03rahman.mp3": {
        "key": "Ar Rahman",

        "title": "Surahe Ar Rahman",

        "file_name": "rukoo03rahman.mp3",
        "duration_in_sec": 1376,
        "duration_in_mili_sec": 1376235,
        "time": "00:22:56",
        "length_in_bytes": 8257602,
        "index": 528
    },
    "al-waqayya_intro_.mp3": {
        "key": "Al Waqayya",

        "title": "Surahe Al Waqayya Introduction",

        "file_name": "al-waqayya_intro_.mp3",
        "duration_in_sec": 383,
        "duration_in_mili_sec": 383373,
        "time": "00:06:23",
        "length_in_bytes": 2300366,
        "index": 529
    },
    "rukoo01al-waqayya.mp3": {
        "key": "Al Waqayya",

        "title": "Surahe Al Waqayya",

        "file_name": "rukoo01al-waqayya.mp3",
        "duration_in_sec": 1484,
        "duration_in_mili_sec": 1484173,
        "time": "00:24:44",
        "length_in_bytes": 8905229,
        "index": 530
    },
    "rukoo02al-waqayya.mp3": {
        "key": "Al Waqayya",

        "title": "Surahe Al Waqayya",

        "file_name": "rukoo02al-waqayya.mp3",
        "duration_in_sec": 1567,
        "duration_in_mili_sec": 1567033,
        "time": "00:26:07",
        "length_in_bytes": 9402392,
        "index": 531
    },
    "rukoo03al-waqayya.mp3": {
        "key": "Al Waqayya",

        "title": "Surahe Al Waqayya",

        "file_name": "rukoo03al-waqayya.mp3",
        "duration_in_sec": 1327,
        "duration_in_mili_sec": 1326629,
        "time": "00:22:06",
        "length_in_bytes": 7959962,
        "index": 532
    },
    "al-hadeed_intro_.mp3": {
        "key": "Al Hadeed",

        "title": "Surahe Al Hadeed Introduction",

        "file_name": "al-hadeed_intro_.mp3",
        "duration_in_sec": 524,
        "duration_in_mili_sec": 524042,
        "time": "00:08:44",
        "length_in_bytes": 3144383,
        "index": 533
    },
    "rukoo01al-hadeed.mp3": {
        "key": "Al Hadeed",
        "title": "Surahe Al Hadeed",

        "file_name": "rukoo01al-hadeed.mp3",
        "duration_in_sec": 1945,
        "duration_in_mili_sec": 1944999,
        "time": "00:32:24",
        "length_in_bytes": 11670186,
        "index": 534
    },
    "rukoo02al-hadeed.mp3": {
        "key": "Al Hadeed",
        "title": "Surahe Al Hadeed",

        "file_name": "rukoo02al-hadeed.mp3",
        "duration_in_sec": 1695,
        "duration_in_mili_sec": 1695425,
        "time": "00:28:15",
        "length_in_bytes": 10172743,
        "index": 535
    },
    "rukoo03al-hadeed.mp3": {
        "key": "Al Hadeed",
        "title": "Surahe Al Hadeed",

        "file_name": "rukoo03al-hadeed.mp3",
        "duration_in_sec": 1263,
        "duration_in_mili_sec": 1262916,
        "time": "00:21:02",
        "length_in_bytes": 7577687,
        "index": 536
    },
    "rukoo04al-hadeed.mp3": {
        "key": "Al Hadeed",
        "title": "Surahe Al Hadeed",

        "file_name": "rukoo04al-hadeed.mp3",
        "duration_in_sec": 2567,
        "duration_in_mili_sec": 2567340,
        "time": "00:42:47",
        "length_in_bytes": 15404233,
        "index": 537
    },
    "al-mujadla_intro_.mp3": {
        "key": "Al-Mujadla",
        "title": "Surahe Al-Mujadla introudction",

        "file_name": "al-mujadla_intro_.mp3",
        "duration_in_sec": 476,
        "duration_in_mili_sec": 476447,
        "time": "00:07:56",
        "length_in_bytes": 2858812,
        "index": 538
    },
    "rukoo01al-mujadla.mp3": {
        "key": "Al-Mujadla",
        "title": "Surahe Al-Mujadla",

        "file_name": "rukoo01al-mujadla.mp3",
        "duration_in_sec": 4480,
        "duration_in_mili_sec": 4480183,
        "time": "01:14:40",
        "length_in_bytes": 26881323,
        "index": 539
    },
    "rukoo02al-mujadla.mp3": {
        "key": "Al-Mujadla",
        "title": "Surahe Al-Mujadla",

        "file_name": "rukoo02al-mujadla.mp3",
        "duration_in_sec": 1401,
        "duration_in_mili_sec": 1401025,
        "time": "00:23:21",
        "length_in_bytes": 8406343,
        "index": 540
    },
    "rukoo03al-mujadla.mp3": {
        "key": "Al-Mujadla",
        "title": "Surahe Al-Mujadla",

        "file_name": "rukoo03al-mujadla.mp3",
        "duration_in_sec": 795,
        "duration_in_mili_sec": 795246,
        "time": "00:13:15",
        "length_in_bytes": 4771602,
        "index": 541
    },
    "alhashr_intro_.mp3": {
        "key": "Al-Mujadla",
        "title": "Surahe Alhashr Introduction",

        "file_name": "alhashr_intro_.mp3",
        "duration_in_sec": 1709,
        "duration_in_mili_sec": 1708643,
        "time": "00:28:28",
        "length_in_bytes": 10252051,
        "index": 542
    },
    "rukoo01alhashr.mp3": {
        "key": "Al-Hashr",
        "title": "Surahe Al-Hashr",

        "file_name": "rukoo01alhashr.mp3",
        "duration_in_sec": 5628,
        "duration_in_mili_sec": 5628160,
        "time": "01:33:48",
        "length_in_bytes": 33769221,
        "index": 543
    },
    "rukoo02alhashr.mp3": {
        "key": "Al-Hashr",

        "title": "Surahe Al-Hashr",
        "file_name": "rukoo02alhashr.mp3",
        "duration_in_sec": 773,
        "duration_in_mili_sec": 772989,
        "time": "00:12:52",
        "length_in_bytes": 4638127,
        "index": 544
    },
    "rukoo03alhashr.mp3": {
        "key": "Al-Hashr",

        "title": "Surahe Al-Hashr",
        "file_name": "rukoo03alhashr.mp3",
        "duration_in_sec": 1610,
        "duration_in_mili_sec": 1610266,
        "time": "00:26:50",
        "length_in_bytes": 9661788,
        "index": 545
    },
    "al-mumtahina_intro_.mp3": {
        "key": "Al-Mumtahina",

        "title": "Surahe Al-Mumtahina Introduction",

        "file_name": "al-mumtahina_intro_.mp3",
        "duration_in_sec": 299,
        "duration_in_mili_sec": 298580,
        "time": "00:04:58",
        "length_in_bytes": 1791606,
        "index": 546
    },
    "rukoo01al-mumtahina.mp3": {
        "key": "Al-Mumtahina",

        "title": "Surahe Al-Mumtahina",

        "file_name": "rukoo01al-mumtahina.mp3",
        "duration_in_sec": 2183,
        "duration_in_mili_sec": 2182713,
        "time": "00:36:22",
        "length_in_bytes": 13096472,
        "index": 547
    },
    "rukoo02al-mumtahina.mp3": {
        "key": "Al-Mumtahina",
        "title": "Surahe Al-Mumtahina",

        "file_name": "rukoo02al-mumtahina.mp3",
        "duration_in_sec": 4017,
        "duration_in_mili_sec": 4016614,
        "time": "01:06:56",
        "length_in_bytes": 24099909,
        "index": 548
    },
    "as-saff_intro_.mp3": {
        "key": "As-Saff",
        "title": "Surahe As-Saff Introduction",

        "file_name": "as-saff_intro_.mp3",
        "duration_in_sec": 198,
        "duration_in_mili_sec": 197538,
        "time": "00:03:17",
        "length_in_bytes": 1185356,
        "index": 549
    },
    "rukoo01as-saff.mp3": {
        "key": "As-Saff",

        "title": "Surahe As-Saff",

        "file_name": "rukoo01as-saff.mp3",
        "duration_in_sec": 5232,
        "duration_in_mili_sec": 5231647,
        "time": "01:27:11",
        "length_in_bytes": 31390110,
        "index": 550
    },
    "rukoo02as-saff.mp3": {
        "key": "As-Saff",

        "title": "Surahe As-Saff",

        "file_name": "rukoo02as-saff.mp3",
        "duration_in_sec": 667,
        "duration_in_mili_sec": 666802,
        "time": "00:11:06",
        "length_in_bytes": 4001001,
        "index": 551
    },
    "al-juma_intro_.mp3": {
        "key": "Al-Jumah",
        "title": "Surahe Al-Jumah Introduction",

        "file_name": "al-juma_intro_.mp3",
        "duration_in_sec": 468,
        "duration_in_mili_sec": 468349,
        "time": "00:07:48",
        "length_in_bytes": 2810224,
        "index": 552
    },
    "rukoo01al-juma.mp3": {
        "key": "Al-Jumah",

        "title": "Surahe Al-Jumah",

        "file_name": "rukoo01al-juma.mp3",
        "duration_in_sec": 1589,
        "duration_in_mili_sec": 1589499,
        "time": "00:26:29",
        "length_in_bytes": 9537121,
        "index": 553
    },
    "rukoo02al-juma.mp3": {
        "key": "Al-Jumah",

        "title": "Surahe Al-Jumah",

        "file_name": "rukoo02al-juma.mp3",
        "duration_in_sec": 3201,
        "duration_in_mili_sec": 3200731,
        "time": "00:53:20",
        "length_in_bytes": 19204517,
        "index": 554
    },
    "al-munafiqoon_intro_.mp3": {
        "key": "Al-Munafiqoon",

        "title": "Surahe Al-Munafiqoon Introudction",

        "file_name": "al-munafiqoon_intro_.mp3",
        "duration_in_sec": 1322,
        "duration_in_mili_sec": 1322031,
        "time": "00:22:02",
        "length_in_bytes": 7932377,
        "index": 555
    },
    "rukoo01al-munafiqoon.mp3": {
        "key": "Al-Munafiqoon",

        "title": "Surahe Al-Munafiqoon",

        "file_name": "rukoo01al-munafiqoon.mp3",
        "duration_in_sec": 1205,
        "duration_in_mili_sec": 1205055,
        "time": "00:20:05",
        "length_in_bytes": 7230456,
        "index": 556
    },
    "rukoo02al-munafiqoon.mp3": {
        "key": "Al-Munafiqoon",

        "title": "Surahe Al-Munafiqoon",

        "file_name": "rukoo02al-munafiqoon.mp3",
        "duration_in_sec": 241,
        "duration_in_mili_sec": 240509,
        "time": "00:04:00",
        "length_in_bytes": 1443184,
        "index": 557
    },
    "at-taghabun_intro_.mp3": {
        "key": "At-Taghabun",
        "title": "Surahe At-Taghabun Introduction",

        "file_name": "at-taghabun_intro_.mp3",
        "duration_in_sec": 405,
        "duration_in_mili_sec": 404689,
        "time": "00:06:44",
        "length_in_bytes": 2428262,
        "index": 558
    },
    "rukoo01at-taghabun.mp3": {
        "key": "At-Taghabun",
        "title": "Surahe At-Taghabun",

        "file_name": "rukoo01at-taghabun.mp3",
        "duration_in_sec": 3133,
        "duration_in_mili_sec": 3132656,
        "time": "00:52:12",
        "length_in_bytes": 18796066,
        "index": 559
    },
    "rukoo02at-taghabun.mp3": {
        "key": "At-Taghabun",

        "title": "Surahe At-Taghabun",

        "file_name": "rukoo02at-taghabun.mp3",
        "duration_in_sec": 1280,
        "duration_in_mili_sec": 1280496,
        "time": "00:21:20",
        "length_in_bytes": 7683169,
        "index": 560
    },
    "at-talaq_intro_.mp3": {
        "key": "At-Talaq",

        "title": "Surahe At-Talaq Introduction",

        "file_name": "at-talaq_intro_.mp3",
        "duration_in_sec": 429,
        "duration_in_mili_sec": 428957,
        "time": "00:07:08",
        "length_in_bytes": 2573868,
        "index": 561
    },
    "rukoo01at-talaq.mp3": {
        "key": "At-Talaq",

        "title": "Surahe At-Talaq",

        "file_name": "rukoo01at-talaq.mp3",
        "duration_in_sec": 5937,
        "duration_in_mili_sec": 5937110,
        "time": "01:38:57",
        "length_in_bytes": 35622789,
        "index": 562
    },
    "rukoo02at-talaq.mp3": {
        "key": "At-Talaq",

        "title": "Surahe At-Talaq",

        "file_name": "rukoo02at-talaq.mp3",
        "duration_in_sec": 722,
        "duration_in_mili_sec": 721737,
        "time": "00:12:01",
        "length_in_bytes": 4330551,
        "index": 563
    },
    "at-tehreem_intro_.mp3": {
        "key": "At-Tahreem",

        "title": "Surahe At-Tahreem Introduction",

        "file_name": "at-tehreem_intro_.mp3",
        "duration_in_sec": 854,
        "duration_in_mili_sec": 853629,
        "time": "00:14:13",
        "length_in_bytes": 5121904,
        "index": 564
    },
    "rukoo01at-tehreem.mp3": {
        "key": "At-Tahreem",

        "title": "Surahe At-Tahreem",

        "file_name": "rukoo01at-tehreem.mp3",
        "duration_in_sec": 3452,
        "duration_in_mili_sec": 3451873,
        "time": "00:57:31",
        "length_in_bytes": 20711364,
        "index": 565
    },
    "rukoo02at-tehreem.mp3": {
        "key": "At-Tahreem",

        "title": "Surahe At-Tahreem",

        "file_name": "rukoo02at-tehreem.mp3",
        "duration_in_sec": 921,
        "duration_in_mili_sec": 920581,
        "time": "00:15:20",
        "length_in_bytes": 5523615,
        "index": 566
    },
    "al-mulk_intro_.mp3": {
        "key": "Al-Mulk",

        "title": "Surahe Al-Mulk Introduction",

        "file_name": "al-mulk_intro_.mp3",
        "duration_in_sec": 363,
        "duration_in_mili_sec": 363233,
        "time": "00:06:03",
        "length_in_bytes": 2179524,
        "index": 567
    },
    "rukoo01al-mulk.mp3": {
        "key": "Al-Mulk",

        "title": "Surahe Al-Mulk",

        "file_name": "rukoo01al-mulk.mp3",
        "duration_in_sec": 1438,
        "duration_in_mili_sec": 1437936,
        "time": "00:23:57",
        "length_in_bytes": 8627746,
        "index": 568
    },
    "rukoo02al-mulk.mp3": {
        "key": "Al-Mulk",

        "title": "Surahe Al-Mulk",

        "file_name": "rukoo02al-mulk.mp3",
        "duration_in_sec": 1170,
        "duration_in_mili_sec": 1169633,
        "time": "00:19:29",
        "length_in_bytes": 7017924,
        "index": 569
    },
    "al-qalam_intro_.mp3": {
        "key": "Al-Qalam",

        "title": "Surahe Al-Qalam Introduction",

        "file_name": "al-qalam_intro_.mp3",
        "duration_in_sec": 260,
        "duration_in_mili_sec": 259840,
        "time": "00:04:19",
        "length_in_bytes": 1559168,
        "index": 570
    },
    "rukoo01al-qalam.mp3": {
        "key": "Al-Qalam",

        "title": "Surahe Al-Qalam",

        "file_name": "rukoo01al-qalam.mp3",
        "duration_in_sec": 1272,
        "duration_in_mili_sec": 1271771,
        "time": "00:21:11",
        "length_in_bytes": 7630757,
        "index": 571
    },
    "rukoo02al-qalam.mp3": {
        "key": "Al-Qalam",

        "title": "Surahe Al-Qalam",

        "file_name": "rukoo02al-qalam.mp3",
        "duration_in_sec": 902,
        "duration_in_mili_sec": 902374,
        "time": "00:15:02",
        "length_in_bytes": 5414371,
        "index": 572
    },
    "al-haqqa_intro_.mp3": {
        "key": "Al-Haqqah",

        "title": "Surahe Al-Haqqah Introduction",

        "file_name": "al-haqqa_intro_.mp3",
        "duration_in_sec": 270,
        "duration_in_mili_sec": 269949,
        "time": "00:04:29",
        "length_in_bytes": 1619824,
        "index": 573
    },
    "rukoo01al-haqqa.mp3": {
        "key": "Al-Haqqah",

        "title": "Surahe Al-Haqqah",

        "file_name": "rukoo01al-haqqa.mp3",
        "duration_in_sec": 1256,
        "duration_in_mili_sec": 1255993,
        "time": "00:20:55",
        "length_in_bytes": 7536089,
        "index": 574
    },
    "rukoo02al-haqqa.mp3": {
        "key": "Al-Haqqah",

        "title": "Surahe Al-Haqqah",

        "file_name": "rukoo02al-haqqa.mp3",
        "duration_in_sec": 693,
        "duration_in_mili_sec": 692950,
        "time": "00:11:32",
        "length_in_bytes": 4157829,
        "index": 575
    },
    "al-maarij_intro_.mp3": {
        "key": "Al-Maarij",

        "title": "Surahe Al-Maarij Introduction",

        "file_name": "al-maarij_intro_.mp3",
        "duration_in_sec": 180,
        "duration_in_mili_sec": 179513,
        "time": "00:02:59",
        "length_in_bytes": 1077209,
        "index": 576
    },
    "rukoo01al-maarij.mp3": {
        "key": "Al-Maarij",

        "title": "Surahe Al-Maarij",

        "file_name": "rukoo01al-maarij.mp3",
        "duration_in_sec": 1369,
        "duration_in_mili_sec": 1369417,
        "time": "00:22:49",
        "length_in_bytes": 8216631,
        "index": 577
    },
    "rukoo02al-maarij.mp3": {
        "key": "Al-Maarij",

        "title": "Surahe Al-Maarij",

        "file_name": "rukoo02al-maarij.mp3",
        "duration_in_sec": 455,
        "duration_in_mili_sec": 454975,
        "time": "00:07:34",
        "length_in_bytes": 2729976,
        "index": 578
    },
    "an-nooh_intro_.mp3": {
        "key": "An-Nooh",

        "title": "Surahe An-Nooh introduction",

        "file_name": "an-nooh_intro_.mp3",
        "duration_in_sec": 256,
        "duration_in_mili_sec": 256392,
        "time": "00:04:16",
        "length_in_bytes": 1538479,
        "index": 579
    },
    "rukoo01an-nooh.mp3": {
        "key": "An-Nooh",

        "title": "Surahe An-Nooh",

        "file_name": "rukoo01an-nooh.mp3",
        "duration_in_sec": 999,
        "duration_in_mili_sec": 999340,
        "time": "00:16:39",
        "length_in_bytes": 5996170,
        "index": 580
    },
    "rukoo02an-nooh.mp3": {
        "key": "An-Nooh",

        "title": "Surahe An-Nooh",

        "file_name": "rukoo02an-nooh.mp3",
        "duration_in_sec": 565,
        "duration_in_mili_sec": 565290,
        "time": "00:09:25",
        "length_in_bytes": 3391867,
        "index": 581
    },
    "al-jinn_intro_.mp3": {
        "key": "Al-Jinn",

        "title": "Surahe Al-Jinn Introduction",

        "file_name": "al-jinn_intro_.mp3",
        "duration_in_sec": 841,
        "duration_in_mili_sec": 840882,
        "time": "00:14:00",
        "length_in_bytes": 5045418,
        "index": 582
    },
    "rukoo01al-jinn.mp3": {
        "key": "Al-Jinn",

        "title": "Surahe Al-Jinn",

        "file_name": "rukoo01al-jinn.mp3",
        "duration_in_sec": 1247,
        "duration_in_mili_sec": 1246720,
        "time": "00:20:46",
        "length_in_bytes": 7480448,
        "index": 583
    },
    "rukoo02al-jinn.mp3": {
        "key": "Al-Jinn",

        "title": "Surahe Al-Jinn",

        "file_name": "rukoo02al-jinn.mp3",
        "duration_in_sec": 573,
        "duration_in_mili_sec": 573414,
        "time": "00:09:33",
        "length_in_bytes": 3440611,
        "index": 584
    },
    "al-muzzammil_intro_.mp3": {
        "key": "Al-Muzzamil",

        "title": "Surahe Al-Muzzamil Introduction",

        "file_name": "al-muzzammil_intro_.mp3",
        "duration_in_sec": 309,
        "duration_in_mili_sec": 309316,
        "time": "00:05:09",
        "length_in_bytes": 1856024,
        "index": 585
    },
    "rukoo01al-muzzammil.mp3": {
        "key": "Al-Muzzamil",

        "title": "Surahe Al-Muzzamil",

        "file_name": "rukoo01al-muzzammil.mp3",
        "duration_in_sec": 1216,
        "duration_in_mili_sec": 1216444,
        "time": "00:20:16",
        "length_in_bytes": 7298792,
        "index": 586
    },
    "rukoo02al-muzzammil.mp3": {
        "key": "Al-Muzzamil",

        "title": "Surahe Al-Muzzamil",

        "file_name": "rukoo02al-muzzammil.mp3",
        "duration_in_sec": 647,
        "duration_in_mili_sec": 647497,
        "time": "00:10:47",
        "length_in_bytes": 3885111,
        "index": 587
    },
    "al-muddassir_intro_.mp3": {
        "key": "Al-Muddassir",

        "title": "Surahe Al-Muddassir Introduction",

        "file_name": "al-muddassir_intro_.mp3",
        "duration_in_sec": 697,
        "duration_in_mili_sec": 696581,
        "time": "00:11:36",
        "length_in_bytes": 4179615,
        "index": 588
    },
    "rukoo01al-muddassir.mp3": {
        "key": "Al-Muddassir",

        "title": "Surahe Al-Muddassir",

        "file_name": "rukoo01al-muddassir.mp3",
        "duration_in_sec": 2288,
        "duration_in_mili_sec": 2287517,
        "time": "00:38:07",
        "length_in_bytes": 13725228,
        "index": 589
    },
    "rukoo02al-muddassir.mp3": {
        "key": "Al-Muddassir",

        "title": "Surahe Al-Muddassir",

        "file_name": "rukoo02al-muddassir.mp3",
        "duration_in_sec": 1004,
        "duration_in_mili_sec": 1004147,
        "time": "00:16:44",
        "length_in_bytes": 6025010,
        "index": 590
    },
    "al-qiyama_intro_.mp3": {
        "key": "Al-Qiyama",

        "title": "Surahe Al-Qiyama Introduction",

        "file_name": "al-qiyama_intro_.mp3",
        "duration_in_sec": 277,
        "duration_in_mili_sec": 276767,
        "time": "00:04:36",
        "length_in_bytes": 1660732,
        "index": 591
    },
    "rukoo01al-qiyama.mp3": {
        "key": "Al-Qiyama",

        "title": "Surahe Al-Qiyama",

        "file_name": "rukoo01al-qiyama.mp3",
        "duration_in_sec": 2752,
        "duration_in_mili_sec": 2751843,
        "time": "00:45:51",
        "length_in_bytes": 16511188,
        "index": 592
    },
    "rukoo02al-qiyama.mp3": {
        "key": "Al-Qiyama",

        "title": "Surahe Al-Qiyama",

        "file_name": "rukoo02al-qiyama.mp3",
        "duration_in_sec": 670,
        "duration_in_mili_sec": 670145,
        "time": "00:11:10",
        "length_in_bytes": 4021000,
        "index": 593
    },
    "ad-dahar_intro_.mp3": {
        "key": "Ad-Dahar",

        "title": "Surahe Ad-Dahar Introduction",

        "file_name": "ad-dahar_intro_.mp3",
        "duration_in_sec": 803,
        "duration_in_mili_sec": 803370,
        "time": "00:13:23",
        "length_in_bytes": 4820410,
        "index": 594
    },
    "rukoo01ad-dahar.mp3": {
        "key": "Ad-Dahar",

        "title": "Surahe Ad-Dahar",

        "file_name": "rukoo01ad-dahar.mp3",
        "duration_in_sec": 3564,
        "duration_in_mili_sec": 3563964,
        "time": "00:59:23",
        "length_in_bytes": 21383912,
        "index": 595
    },
    "rukoo02ad-dahar.mp3": {
        "key": "Ad-Dahar",
        "title": "Surahe Ad-Dahar",

        "file_name": "rukoo02ad-dahar.mp3",
        "duration_in_sec": 902,
        "duration_in_mili_sec": 901904,
        "time": "00:15:01",
        "length_in_bytes": 5411550,
        "index": 596
    },
    "al-mursalat_intro_.mp3": {
        "key": "Al-Mursalat",
        "title": "Surahe Al-Mursalat Introduction",

        "file_name": "al-mursalat_intro_.mp3",
        "duration_in_sec": 377,
        "duration_in_mili_sec": 376973,
        "time": "00:06:16",
        "length_in_bytes": 2261966,
        "index": 597
    },
    "rukoo01al-mursalat.mp3": {
        "key": "Al-Mursalat",
        "title": "Surahe Al-Mursalat",

        "file_name": "rukoo01al-mursalat.mp3",
        "duration_in_sec": 2134,
        "duration_in_mili_sec": 2133734,
        "time": "00:35:33",
        "length_in_bytes": 12802531,
        "index": 598
    },
    "rukoo02al-mursalat.mp3": {
        "key": "Al-Mursalat",

        "title": "Surahe Al-Mursalat",

        "file_name": "rukoo02al-mursalat.mp3",
        "duration_in_sec": 252,
        "duration_in_mili_sec": 251559,
        "time": "00:04:11",
        "length_in_bytes": 1509483,
        "index": 599
    },
    "an-naba_intro_.mp3": {
        "key": "An-Naba",

        "title": "Surahe An-Naba Introduction",

        "file_name": "an-naba_intro_.mp3",
        "duration_in_sec": 534,
        "duration_in_mili_sec": 533995,
        "time": "00:08:53",
        "length_in_bytes": 3204162,
        "index": 600
    },
    "rukoo01an-naba.mp3": {
        "key": "An-Naba",
        "title": "Surahe An-Naba",

        "file_name": "rukoo01an-naba.mp3",
        "duration_in_sec": 1271,
        "duration_in_mili_sec": 1270727,
        "time": "00:21:10",
        "length_in_bytes": 7624487,
        "index": 601
    },
    "rukoo02an-naba.mp3": {
        "key": "An-Naba",
        "title": "Surahe An-Naba",

        "file_name": "rukoo02an-naba.mp3",
        "duration_in_sec": 431,
        "duration_in_mili_sec": 430864,
        "time": "00:07:10",
        "length_in_bytes": 2585310,
        "index": 602
    },
    "an-nazayaat_intro_.mp3": {
        "key": "An-Nazayaat",
        "title": "Surahe An-Nazayaat introduction",
        "file_name": "an-nazayaat_intro_.mp3",
        "duration_in_sec": 328,
        "duration_in_mili_sec": 328176,
        "time": "00:05:28",
        "length_in_bytes": 1969186,
        "index": 603
    },
    "rukoo01an-nazayaat.mp3": {
        "key": "An-Nazayaat",
        "title": "Surahe An-Nazayaat",
        "file_name": "rukoo01an-nazayaat.mp3",
        "duration_in_sec": 1179,
        "duration_in_mili_sec": 1179246,
        "time": "00:19:39",
        "length_in_bytes": 7075602,
        "index": 604
    },
    "rukoo02an-nazayaat.mp3": {
        "key": "An-Nazayaat",

        "title": "Surahe An-Nazayaat",

        "file_name": "rukoo02an-nazayaat.mp3",
        "duration_in_sec": 898,
        "duration_in_mili_sec": 898403,
        "time": "00:14:58",
        "length_in_bytes": 5390548,
        "index": 605
    },
    "abass_intro_.mp3": {
        "key": "Abasa",

        "title": "Surahe Abasa Introduction",

        "file_name": "abass_intro_.mp3",
        "duration_in_sec": 416,
        "duration_in_mili_sec": 416104,
        "time": "00:06:56",
        "length_in_bytes": 2496755,
        "index": 606
    },
    "rukoo01abass.mp3": {
        "key": "Abasa",
        "title": "Surahe Abasa",

        "file_name": "rukoo01abass.mp3",
        "duration_in_sec": 1516,
        "duration_in_mili_sec": 1515860,
        "time": "00:25:15",
        "length_in_bytes": 9095286,
        "index": 607
    },
    "at-takveer_intro_.mp3": {
        "key": "At-Takveer",

        "title": "Surahe At-Takveer introduction",

        "file_name": "at-takveer_intro_.mp3",
        "duration_in_sec": 122,
        "duration_in_mili_sec": 122305,
        "time": "00:02:02",
        "length_in_bytes": 733960,
        "index": 608
    },
    "rukoo01at-takveer.mp3": {
        "key": "At-Takveer",

        "title": "Surahe At-Takveer",

        "file_name": "rukoo01at-takveer.mp3",
        "duration_in_sec": 1515,
        "duration_in_mili_sec": 1515233,
        "time": "00:25:15",
        "length_in_bytes": 9091524,
        "index": 609
    },
    "al-infitar_intro_.mp3": {
        "key": "Al-Infitar",

        "title": "Surahe Al-Infitar introduction",

        "file_name": "al-infitar_intro_.mp3",
        "duration_in_sec": 130,
        "duration_in_mili_sec": 129829,
        "time": "00:02:09",
        "length_in_bytes": 779099,
        "index": 610
    },
    "rukoo01al-infitar.mp3": {
        "key": "Al-Infitar",

        "title": "Surahe Al-Infitar",

        "file_name": "rukoo01al-infitar.mp3",
        "duration_in_sec": 751,
        "duration_in_mili_sec": 751151,
        "time": "00:12:31",
        "length_in_bytes": 4507034,
        "index": 611
    },
    "al-mutafifeen_intro_.mp3": {
        "key": "Al-Mutafifeen",
        "title": "Surahe Al-Mutafifeen introduction",

        "file_name": "al-mutafifeen_intro_.mp3",
        "duration_in_sec": 245,
        "duration_in_mili_sec": 245002,
        "time": "00:04:05",
        "length_in_bytes": 1470143,
        "index": 612
    },
    "rukoo01al-mutafifeen.mp3": {
        "key": "Al-Mutafifeen",

        "title": "Surahe Al-Mutafifeen",

        "file_name": "rukoo01al-mutafifeen.mp3",
        "duration_in_sec": 883,
        "duration_in_mili_sec": 882678,
        "time": "00:14:42",
        "length_in_bytes": 5296193,
        "index": 613
    },
    "al-inshiqaq_intro_.mp3": {
        "key": "Al-Inshiqaq",

        "title": "Surahe Al-Inshiqaq introduction",

        "file_name": "al-inshiqaq_intro_.mp3",
        "duration_in_sec": 184,
        "duration_in_mili_sec": 184059,
        "time": "00:03:04",
        "length_in_bytes": 1104481,
        "index": 614
    },
    "rukoo01al-inshiqaq.mp3": {
        "key": "Al-Inshiqaq",
        "title": "Surahe Al-Inshiqaq",

        "file_name": "rukoo01al-inshiqaq.mp3",
        "duration_in_sec": 873,
        "duration_in_mili_sec": 872882,
        "time": "00:14:32",
        "length_in_bytes": 5237418,
        "index": 615
    },
    "al-burooj_intro_.mp3": {
        "key": "Al-Burooj",
        "title": "Surahe Al-Burooj introduction",
        "file_name": "al-burooj_intro_.mp3",
        "duration_in_sec": 161,
        "duration_in_mili_sec": 160784,
        "time": "00:02:40",
        "length_in_bytes": 964830,
        "index": 616
    },
    "rukoo01al-burooj.mp3": {
        "key": "Al-Burooj",

        "title": "Surahe Al-Burooj",

        "file_name": "rukoo01al-burooj.mp3",
        "duration_in_sec": 1166,
        "duration_in_mili_sec": 1166184,
        "time": "00:19:26",
        "length_in_bytes": 6997235,
        "index": 617
    },
    "at-tariq_intro_.mp3": {
        "key": "At-Tariq",

        "title": "Surahe At-Tariq introduction",

        "file_name": "at-tariq_intro_.mp3",
        "duration_in_sec": 163,
        "duration_in_mili_sec": 162664,
        "time": "00:02:42",
        "length_in_bytes": 976115,
        "index": 618
    },
    "rukoo01at-tariq.mp3": {
        "key": "At-Tariq",
        "title": "Surahe At-Tariq",

        "file_name": "rukoo01at-tariq.mp3",
        "duration_in_sec": 980,
        "duration_in_mili_sec": 979722,
        "time": "00:16:19",
        "length_in_bytes": 5878463,
        "index": 619
    },
    "alaala_intro_.mp3": {
        "key": "At-Aala",

        "title": "Surahe At-Aala introduction",

        "file_name": "alaala_intro_.mp3",
        "duration_in_sec": 340,
        "duration_in_mili_sec": 340454,
        "time": "00:05:40",
        "length_in_bytes": 2042851,
        "index": 620
    },
    "rukoo01alaala.mp3": {
        "key": "At-Aala",

        "title": "Surahe At-Aala",

        "file_name": "rukoo01alaala.mp3",
        "duration_in_sec": 1301,
        "duration_in_mili_sec": 1301081,
        "time": "00:21:41",
        "length_in_bytes": 7806613,
        "index": 621
    },
    "al-ghashiya_intro_.mp3": {
        "key": "At-Ghashiya",

        "title": "Surahe At-Ghashiya introduction",

        "file_name": "al-ghashiya_intro_.mp3",
        "duration_in_sec": 220,
        "duration_in_mili_sec": 220108,
        "time": "00:03:40",
        "length_in_bytes": 1320775,
        "index": 622
    },
    "rukoo01al-ghashiya.mp3": {
        "key": "At-Ghashiya",

        "title": "Surahe Al-Ghashiya",

        "file_name": "rukoo01al-ghashiya.mp3",
        "duration_in_sec": 556,
        "duration_in_mili_sec": 555729,
        "time": "00:09:15",
        "length_in_bytes": 3334502,
        "index": 623
    },
    "al-fajr_intro_.mp3": {
        "key": "Al-Fajr",

        "title": "Surahe Al-Fajr Introduction",

        "file_name": "al-fajr_intro_.mp3",
        "duration_in_sec": 286,
        "duration_in_mili_sec": 286328,
        "time": "00:04:46",
        "length_in_bytes": 1718097,
        "index": 624
    },
    "rukoo01al-fajr.mp3": {
        "key": "Al-Fajr",
        "title": "Surahe Al-Fajr",

        "file_name": "rukoo01al-fajr.mp3",
        "duration_in_sec": 1617,
        "duration_in_mili_sec": 1616718,
        "time": "00:26:56",
        "length_in_bytes": 9700438,
        "index": 625
    },
    "al-balad_intro_.mp3": {
        "key": "Al-Balad",
        "title": "Surahe Al-Balad introduction",

        "file_name": "al-balad_intro_.mp3",
        "duration_in_sec": 266,
        "duration_in_mili_sec": 266136,
        "time": "00:04:26",
        "length_in_bytes": 1596941,
        "index": 626
    },
    "rukoo01al-balad.mp3": {
        "key": "Al-Balad",

        "title": "Surahe Al-Balad",

        "file_name": "rukoo01al-balad.mp3",
        "duration_in_sec": 1825,
        "duration_in_mili_sec": 1824940,
        "time": "00:30:24",
        "length_in_bytes": 10949770,
        "index": 627
    },
    "ash-shams_intro_.mp3": {
        "key": "Ash-Shams",

        "title": "Surahe Ash Shams introduction",

        "file_name": "ash-shams_intro_.mp3",
        "duration_in_sec": 238,
        "duration_in_mili_sec": 237897,
        "time": "00:03:57",
        "length_in_bytes": 1427511,
        "index": 628
    },
    "rukoo01ash-shams.mp3": {
        "key": "Ash-Shams",
        "title": "Surahe Ash Shams",

        "file_name": "rukoo01ash-shams.mp3",
        "duration_in_sec": 1623,
        "duration_in_mili_sec": 1623353,
        "time": "00:27:03",
        "length_in_bytes": 9740249,
        "index": 629
    },
    "al-lail_intro_.mp3": {
        "key": "Al-Lail",
        "title": "Surahe Al-Lail Introduction",

        "file_name": "al-lail_intro_.mp3",
        "duration_in_sec": 263,
        "duration_in_mili_sec": 262792,
        "time": "00:04:22",
        "length_in_bytes": 1576879,
        "index": 630
    },
    "rukoo01al-lail.mp3": {
        "key": "Al-Lail",

        "title": "Surahe Al-Lail",

        "file_name": "rukoo01al-lail.mp3",
        "duration_in_sec": 1269,
        "duration_in_mili_sec": 1268872,
        "time": "00:21:08",
        "length_in_bytes": 7613359,
        "index": 631
    },
    "az-zuha_intro_.mp3": {
        "key": "Az-zuha",

        "title": "Surahe Az-Zuha Introduction",

        "file_name": "az-zuha_intro_.mp3",
        "duration_in_sec": 261,
        "duration_in_mili_sec": 260807,
        "time": "00:04:20",
        "length_in_bytes": 1564967,
        "index": 632
    },
    "rukoo01az-zuha.mp3": {
        "key": "Az-zuha",

        "title": "Surahe Az-Zuha",

        "file_name": "rukoo01az-zuha.mp3",
        "duration_in_sec": 1130,
        "duration_in_mili_sec": 1129770,
        "time": "00:18:49",
        "length_in_bytes": 6778747,
        "index": 633
    },
    "alamnashrah_intro_.mp3": {
        "key": "Alam-Nashrah",

        "title": "Surahe Alam-Nashrah introduction",

        "file_name": "alamnashrah_intro_.mp3",
        "duration_in_sec": 206,
        "duration_in_mili_sec": 206237,
        "time": "00:03:26",
        "length_in_bytes": 1237548,
        "index": 634
    },
    "rukoo01alamnashrah.mp3": {
        "key": "Alam-Nashrah",

        "title": "Surahe Alam-Nashrah",

        "file_name": "rukoo01alamnashrah.mp3",
        "duration_in_sec": 1017,
        "duration_in_mili_sec": 1017287,
        "time": "00:16:57",
        "length_in_bytes": 6103847,
        "index": 635
    },
    "at-teen_intro_.mp3": {
        "key": "At-Teen",

        "title": "Surahe At-Teen introduction",

        "file_name": "at-teen_intro_.mp3",
        "duration_in_sec": 249,
        "duration_in_mili_sec": 249260,
        "time": "00:04:09",
        "length_in_bytes": 1495690,
        "index": 636
    },
    "rukoo01at-teen.mp3": {
        "key": "At-Teen",

        "title": "Surahe At-Teen",

        "file_name": "rukoo01at-teen.mp3",
        "duration_in_sec": 988,
        "duration_in_mili_sec": 988447,
        "time": "00:16:28",
        "length_in_bytes": 5930812,
        "index": 637
    },
    "al-alaq_intro_.mp3": {
        "key": "Al-Alaq",

        "title": "Surahe Al-Alaq Introduction",

        "file_name": "al-alaq_intro_.mp3",
        "duration_in_sec": 670,
        "duration_in_mili_sec": 670276,
        "time": "00:11:10",
        "length_in_bytes": 4021784,
        "index": 638
    },
    "rukoo01al-alaq.mp3": {
        "key": "Al-Alaq",

        "title": "Surahe Al-alaq",

        "file_name": "rukoo01al-alaq.mp3",
        "duration_in_sec": 742,
        "duration_in_mili_sec": 741878,
        "time": "00:12:21",
        "length_in_bytes": 4451393,
        "index": 639
    },
    "al-qadr_intro_.mp3": {
        "key": "Al-Qadr",

        "title": "Surahe Al-qadr Introduction",

        "file_name": "al-qadr_intro_.mp3",
        "duration_in_sec": 225,
        "duration_in_mili_sec": 224705,
        "time": "00:03:44",
        "length_in_bytes": 1348360,
        "index": 640
    },
    "rukoo01al-qadr.mp3": {
        "key": "Al-Qadr",

        "title": "Surahe Al-qadr",

        "file_name": "rukoo01al-qadr.mp3",
        "duration_in_sec": 661,
        "duration_in_mili_sec": 660950,
        "time": "00:11:00",
        "length_in_bytes": 3965829,
        "index": 641
    },
    "al-bayyena_intro_.mp3": {
        "key": "Al-Bayyena",
        "title": "Surahe Al-Bayyena Introduction",

        "file_name": "al-bayyena_intro_.mp3",
        "duration_in_sec": 225,
        "duration_in_mili_sec": 224758,
        "time": "00:03:44",
        "length_in_bytes": 1348673,
        "index": 642
    },
    "rukoo01al-bayyena.mp3": {
        "key": "Al-Bayyena",

        "title": "Surahe Al-bayyena",

        "file_name": "rukoo01al-bayyena.mp3",
        "duration_in_sec": 946,
        "duration_in_mili_sec": 946416,
        "time": "00:15:46",
        "length_in_bytes": 5678626,
        "index": 643
    },
    "az-zilzal_intro_.mp3": {
        "key": "Az-Zilzal",
        "title": "Surahe Az-Zilzal Introduction",

        "file_name": "az-zilzal_intro_.mp3",
        "duration_in_sec": 243,
        "duration_in_mili_sec": 243200,
        "time": "00:04:03",
        "length_in_bytes": 1459328,
        "index": 644
    },
    "rukoo01az-zilzal.mp3": {
        "key": "Az-Zilzal",
        "title": "Surahe Az-zilzal",

        "file_name": "rukoo01az-zilzal.mp3",
        "duration_in_sec": 1515,
        "duration_in_mili_sec": 1515468,
        "time": "00:25:15",
        "length_in_bytes": 9092935,
        "index": 645
    },
    "al-adiyat_intro_.mp3": {
        "key": "Al-Adiyat",
        "title": "Surahe Al-Adiyat Introduction",

        "file_name": "al-adiyat_intro_.mp3",
        "duration_in_sec": 180,
        "duration_in_mili_sec": 179540,
        "time": "00:02:59",
        "length_in_bytes": 1077366,
        "index": 646
    },
    "rukoo01al-adiyat.mp3": {
        "key": "Al-Adiyat",

        "title": "Surahe Al-Adiyat",

        "file_name": "rukoo01al-adiyat.mp3",
        "duration_in_sec": 658,
        "duration_in_mili_sec": 658233,
        "time": "00:10:58",
        "length_in_bytes": 3949529,
        "index": 647
    },
    "al-qariya_intro_.mp3": {
        "key": "Al-Qariya",

        "title": "Surahe Al-Qariya Introduction",

        "file_name": "al-qariya_intro_.mp3",
        "duration_in_sec": 103,
        "duration_in_mili_sec": 103340,
        "time": "00:01:43",
        "length_in_bytes": 620170,
        "index": 648
    },
    "rukoo01al-qariya.mp3": {
        "key": "Al-Qariya",

        "title": "Surahe Al-Qariya",

        "file_name": "rukoo01al-qariya.mp3",
        "duration_in_sec": 470,
        "duration_in_mili_sec": 469812,
        "time": "00:07:49",
        "length_in_bytes": 2819001,
        "index": 649
    },
    "at-takasur_intro_.mp3": {
        "key": "Al-Qariya",

        "title": "Surahe At-Takasur Introduction",

        "file_name": "at-takasur_intro_.mp3",
        "duration_in_sec": 306,
        "duration_in_mili_sec": 305842,
        "time": "00:05:05",
        "length_in_bytes": 1835178,
        "index": 650
    },
    "rukoo01at-takasur.mp3": {
        "key": "At-Takasur",
        "title": "Surahe At-Takasur",

        "file_name": "rukoo01at-takasur.mp3",
        "duration_in_sec": 696,
        "duration_in_mili_sec": 696216,
        "time": "00:11:36",
        "length_in_bytes": 4177421,
        "index": 651
    },
    "al-asr_intro_.mp3": {
        "key": "Al-Asr",

        "title": "Surahe Al-Asr Introduction",

        "file_name": "al-asr_intro_.mp3",
        "duration_in_sec": 96,
        "duration_in_mili_sec": 96052,
        "time": "00:01:36",
        "length_in_bytes": 576441,
        "index": 652
    },
    "rukoo01al-asr.mp3": {
        "key": "Al-Asr",

        "title": "Surahe Al-Asr",

        "file_name": "rukoo01al-asr.mp3",
        "duration_in_sec": 1194,
        "duration_in_mili_sec": 1193509,
        "time": "00:19:53",
        "length_in_bytes": 7161179,
        "index": 653
    },
    "al-humaza_intro_.mp3": {
        "key": "Al-Humaza",

        "title": "Surahe Al-Humaza Introduction",

        "file_name": "al-humaza_intro_.mp3",
        "duration_in_sec": 228,
        "duration_in_mili_sec": 227892,
        "time": "00:03:47",
        "length_in_bytes": 1367481,
        "index": 654
    },
    "rukoo01al-humaza.mp3": {
        "key": "Al-Humaza",

        "title": "Surahe Al-Humaza",

        "file_name": "rukoo01al-humaza.mp3",
        "duration_in_sec": 431,
        "duration_in_mili_sec": 431334,
        "time": "00:07:11",
        "length_in_bytes": 2588131,
        "index": 655
    },
    "al-feel_intro_.mp3": {
        "key": "Al-Feel",

        "title": "Surahe Al-Feel introduction",

        "file_name": "al-feel_intro_.mp3",
        "duration_in_sec": 1369,
        "duration_in_mili_sec": 1369051,
        "time": "00:22:49",
        "length_in_bytes": 8214500,
        "index": 656
    },
    "rukoo01al-feel.mp3": {
        "key": "Al-Feel",

        "title": "Surahe Al-Feel",

        "file_name": "rukoo01al-feel.mp3",
        "duration_in_sec": 664,
        "duration_in_mili_sec": 663980,
        "time": "00:11:03",
        "length_in_bytes": 3984010,
        "index": 657
    },
    "quraish_intro_.mp3": {
        "key": "Quraish",

        "title": "Surahe Quraish Introduction",

        "file_name": "quraish_intro_.mp3",
        "duration_in_sec": 509,
        "duration_in_mili_sec": 509127,
        "time": "00:08:29",
        "length_in_bytes": 3054887,
        "index": 658
    },
    "rukoo01quraish.mp3": {
        "key": "Quraish",
        "title": "Surahe Quraish",

        "file_name": "rukoo01quraish.mp3",
        "duration_in_sec": 402,
        "duration_in_mili_sec": 402233,
        "time": "00:06:42",
        "length_in_bytes": 2413529,
        "index": 659
    },
    "al-maoon_intro_.mp3": {
        "key": "Al-Maoon",

        "title": "Surahe Al-Maoon Introduction",

        "file_name": "al-maoon_intro_.mp3",
        "duration_in_sec": 179,
        "duration_in_mili_sec": 178860,
        "time": "00:02:58",
        "length_in_bytes": 1073290,
        "index": 660
    },
    "rukoo01al-maoon.mp3": {
        "key": "Al-Maoon",

        "title": "Surahe Al-Maoon",

        "file_name": "rukoo01al-maoon.mp3",
        "duration_in_sec": 1432,
        "duration_in_mili_sec": 1431771,
        "time": "00:23:51",
        "length_in_bytes": 8590757,
        "index": 661
    },
    "al-kausar_intro_.mp3": {
        "key": "Al-Kausar",
        "title": "Surahe Al-Kausar introduction",

        "file_name": "al-kausar_intro_.mp3",
        "duration_in_sec": 670,
        "duration_in_mili_sec": 669597,
        "time": "00:11:09",
        "length_in_bytes": 4017771,
        "index": 662
    },
    "rukoo01al-kausar.mp3": {
        "key": "Al-Kausar",

        "title": "Surahe Al-kausar",

        "file_name": "rukoo01al-kausar.mp3",
        "duration_in_sec": 1589,
        "duration_in_mili_sec": 1589394,
        "time": "00:26:29",
        "length_in_bytes": 9536494,
        "index": 663
    },
    "al-kafiroon_intro_.mp3": {
        "key": "Al-Kafiroon",

        "title": "Surahe Al-Kafiroon Introduction",

        "file_name": "al-kafiroon_intro_.mp3",
        "duration_in_sec": 549,
        "duration_in_mili_sec": 549433,
        "time": "00:09:09",
        "length_in_bytes": 3296729,
        "index": 664
    },
    "rukoo01al-kafiroon.mp3": {
        "key": "Al-Kafiroon",

        "title": "Surahe Al-Kafiroon",

        "file_name": "rukoo01al-kafiroon.mp3",
        "duration_in_sec": 1729,
        "duration_in_mili_sec": 1729149,
        "time": "00:28:49",
        "length_in_bytes": 10375024,
        "index": 665
    },
    "an-nasr_intro_.mp3": {
        "key": "An-Nasr",

        "title": "Surahe An-Nasr introduction",

        "file_name": "an-nasr_intro_.mp3",
        "duration_in_sec": 715,
        "duration_in_mili_sec": 715154,
        "time": "00:11:55",
        "length_in_bytes": 4291054,
        "index": 666
    },
    "rukoo01an-nasr.mp3": {
        "key": "An-Nasr",

        "title": "Surahe An-Nasr",

        "file_name": "rukoo01an-nasr.mp3",
        "duration_in_sec": 426,
        "duration_in_mili_sec": 426449,
        "time": "00:07:06",
        "length_in_bytes": 2558822,
        "index": 667
    },
    "al-lahab_intro_.mp3": {
        "key": "Al-Lahab",

        "title": "Surahe Al-Lahab Introduction",

        "file_name": "al-lahab_intro_.mp3",
        "duration_in_sec": 934,
        "duration_in_mili_sec": 934191,
        "time": "00:15:34",
        "length_in_bytes": 5605337,
        "index": 668
    },
    "rukoo01al-lahab.mp3": {
        "key": "Al-Lahab",

        "title": "Surahe Al-lahab",

        "file_name": "rukoo01al-lahab.mp3",
        "duration_in_sec": 661,
        "duration_in_mili_sec": 660898,
        "time": "00:11:00",
        "length_in_bytes": 3965516,
        "index": 669
    },
    "al-ikhlas_intro_.mp3": {
        "key": "Al-Ikhlas",
        "title": "Surahe Al-Ikhlas Introduction",

        "file_name": "al-ikhlas_intro_.mp3",
        "duration_in_sec": 807,
        "duration_in_mili_sec": 807001,
        "time": "00:13:27",
        "length_in_bytes": 4842196,
        "index": 670
    },
    "rukoo01al-ikhlas.mp3": {
        "key": "Al-Ikhlas",

        "title": "Surahe Al-Ikhlas",

        "file_name": "rukoo01al-Ikhlas.mp3",
        "duration_in_sec": 1706,
        "duration_in_mili_sec": 1706371,
        "time": "00:28:26",
        "length_in_bytes": 10238352,
        "index": 671
    },
    "muavezatain_intro_.mp3": {
        "key": "muavezatain",

        "title": "muavezatain Introduction",

        "file_name": "muavezatain_intro_.mp3",
        "duration_in_sec": 3350,
        "duration_in_mili_sec": 3350413,
        "time": "00:55:50",
        "length_in_bytes": 20102669,
        "index": 672
    },
    "rukoo01al-falaq.mp3": {
        "key": "muavezatain",

        "title": "Surah Al-Falaq",

        "file_name": "rukoo01al-falaq.mp3",
        "duration_in_sec": 1723,
        "duration_in_mili_sec": 1723455,
        "time": "00:28:43",
        "length_in_bytes": 10340856,
        "index": 673
    },
    "rukoo01an-naas.mp3": {
        "key": "muavezatain",

        "title": "Surah An-Naas",

        "file_name": "rukoo01an-naas.mp3",
        "duration_in_sec": 866,
        "duration_in_mili_sec": 865959,
        "time": "00:14:25",
        "length_in_bytes": 5195883,
        "index": 674
    }
};
// {
//     "publish_status": true,
//     "title": "Lecture 3: Dunya Aur Aakhrat",
//     "link": "https://ia903003.us.archive.org/25/items/dunyaauraakhratimproved/DunyaAurAakhratImproved.mp3",
//     "description": "Urdu Speech by Islamic Scholar Khurram Murad on life and Judgement day.",
//     "pubDate": "Mon, 04Nov 2019 22:39:00 GMT",
//     "duration_in_sec": "2440",
//     "length_in_bytes": "39047937",
//     "keywords": "islam, urdu , hindi , Religion, spirituality, patience",
//     "itunes": {
//         "duration": "00:40:40",
//         "type": "episodic"
//     }
// }

let arrayObj = [],
    oldKeyName  =  null,
    currentKeyName =  null,
    epiCounter = 0,
    arrayList = Object.keys(obj),
    seasonCounter = 0,
    now = new Date("Sun, 01Jan 2020 22:39:00 GMT");

for(let i = 1; i <= 674; i++) {

    for(let j = 0; j < arrayList.length; j++) {

        let keyName = arrayList[j];

        if (obj[keyName] && obj[keyName].index === i) {

            currentKeyName = obj[keyName].key;
            let newObject = Object.assign({},obj[keyName]);
            //console.log(i, keyName);
            if (/rukoo\d{1,}/.test(keyName)) {
                let match = /(?<rokoo_num>\d{1,}).+/.exec(keyName);
                if (match.groups && match.groups.rokoo_num) {
                    newObject.title = `${newObject.title} Rokoo ${match.groups.rokoo_num}`;
                }
            }
            if (oldKeyName === currentKeyName) {
                epiCounter++;
                oldKeyName = currentKeyName;
            } else {
                oldKeyName = currentKeyName;
                epiCounter =1;
                seasonCounter =  seasonCounter + 1;
            }

            newObject.publish_status = true,
            newObject.link = 'https://ia902809.us.archive.org/23/items/tafheem-ul-quran_202001/' + keyName,
            newObject.description = `Urdu audio book of Tafeem ul Quran. Surah ${newObject.title}`,
            newObject.pubDate = now.toUTCString(),
            newObject.duration_in_sec = obj[keyName].duration_in_sec.toString(),
            newObject.length_in_bytes = obj[keyName].length_in_bytes.toString(),
            newObject.keywords = "Quran , Religion, spirituality, patience, islam",
            newObject.itunes = {
                duration: obj[keyName].time,
                type: "episodic",
                episode: epiCounter,
                season: seasonCounter,
            };
            arrayObj.push(newObject);
            now.setMinutes(now.getMinutes() + 30); // timestamp
            now = new Date(now);
            break;
        }
    }
}

console.log(JSON.stringify(arrayObj));
