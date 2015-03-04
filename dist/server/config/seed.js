/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Hotels = require('../api/hotels/hotels.model');
var Detail = require('../api/detail/detail.model');
var Payment = require('../api/payment/payment.model');
var Country = require('../api/country/country.model');
var Bookings = require('../api/bookings/bookings.model');
var Resdetail = require('../api/resDetail/resDetail.model');
var Favorites = require('../api/favorites/favorites.model');
var Rewards = require('../api/rewards/rewards.model');
var Search = require('../api/search/search.model');



var Payment = require('../api/payment/payment.model');
Payment.find({}).remove(function() {
    Payment.create({
            "hid":"1",
            "sid":"123123123",
            "hotel":[
                {
                    "name":"Boston Buckminster Hotel",
                    "star":"4",
                    "address":"645 Beacon Street Ma 02215 Boston, United States",
                    "checkIn":"29 Oct 2014 Tuesday",
                    "checkOut":"30 Oct 2014 Wednesday",
                    "for":"1 nights 1 rooms",
                    "totalPrice":"191 EUR",
                    "rewards":"5.73",
                    "photo":""
                }
            ],
            "cancellation" : [
                {
                    "cancPolicy":"-",
                    "type":"Cancellation",
                    "from":"28 Oct 2014",
                    "to":"28 Oct 2014",
                    "cancFree":"191 EUR",
                    "detail":"This is a non refundable booking no cancellation"
                }
            ],
            "roomsRate":[
                {
                    "rooms":[
                        {
                            "availableRooms":"Economy Plus Double (non Refundable)",
                            "boardType":"Room Only",
                            "quantity":"1",
                            "adults":"2",
                            "child":"-",
                            "roomRate":"191 EUR"
                        },
                        {
                            "availableRooms":"Economy Plus Double (non Refundable)",
                            "boardType":"Room Only",
                            "quantity":"1",
                            "adults":"1",
                            "child":"-",
                            "roomRate":"191 EUR"
                        }
                    ]

                }
            ],
            "rewardsPayment":[
                {
                    "currency":"EUR",
                    "bonusTotal":"682"
                }
            ],
            "cardPayment":[
                {
                    "resTotal":"191 EUR"
                }
            ],
            "guestsName":[
                {
                    "firstName":"",
                    "lastName":"",
                    "gender":""
                }
            ]
        },
        {
            "hid":"2",
            "sid":"9879878098789",
            "hotel":[
                {
                    "name":"Best Western Adams Inn Hotel",
                    "star":"3",
                    "address":"29 Hancock Street , 02171 Boston, United States",
                    "checkIn":"29 Oct 2014 Tuesday",
                    "checkOut":"30 Oct 2014 Wednesday",
                    "for":"1 nights 1 rooms",
                    "totalPrice":"191 EUR",
                    "rewards":"5.73",
                    "photo":""
                }
            ],
            "cancellation" : [
                {
                    "cancPolicy":"-",
                    "type":"Cancellation",
                    "from":"28 Oct 2014",
                    "to":"28 Oct 2014",
                    "cancFree":"191 EUR",
                    "detail":"This is a non refundable booking no cancellation"
                }
            ],
            "roomsRate":[
                {
                    "rooms":[
                        {
                            "availableRooms":"Economy Plus Double (non Refundable)",
                            "boardType":"Room Only",
                            "quantity":"1",
                            "adults":"2",
                            "child":"-",
                            "roomRate":"191 EUR"
                        },
                        {
                            "availableRooms":"Economy Plus Double (non Refundable)",
                            "boardType":"Room Only",
                            "quantity":"1",
                            "adults":"1",
                            "child":"-",
                            "roomRate":"191 EUR"
                        }
                    ]

                }
            ],
            "rewardsPayment":[
                {
                    "currency":"EUR",
                    "bonusTotal":"682"
                }
            ],
            "cardPayment":
                [
                    {
                        "resTotal":"191 EUR"
                    }
                ],
            "guestsName":[
                {
                    "firstName":"",
                    "lastName":"",
                    "gender":""
                }
        ]
        }
    );
});

var Detail = require('../api/detail/detail.model');
Detail.find({}).remove(function() {
    Detail.create({
            "hid":"1",
            "sid":"59466212",
            "name":"Boston Buckminster Hotel",
            "star":"4",
            "cancellation" : "FREE Cancellation",
            "tripAdvisor":[
                {
                    "rate":"3.0",
                    "score":"1299"
                }
            ],
            "address":"645 Beacon Street Ma 02215 Boston, United States",
            "price":[
                {
                    "default":"199 EUR",
                    "old":"259 EUR",
                    "earn":"3,39"
                }
            ],
            "info": [
                ["Hotel Location", "Fancy staying at one of the first hotels built in the Boston area and designed by famous architect Stanford White?"] ,
                ["Hotel Rooms", "Fancy staying at one of the first hotels built in the Boston area and designed by famous architect Stanford White?"]
            ],
            "city":[
                {
                    "name":"Boston, MA",
                    "id":"1299"
                }
            ],
            "country":[
                {
                    "name":"United States",
                    "id":"5655"
                }
            ],
            "images":[
                "9/6/1/1/8/0/0/81169/Y/1025",
                "9/6/1/1/8/0/0/81169/Y/1025",
                "9/6/1/1/8/0/0/81169/Y/1025",
                "9/6/1/1/8/0/0/81169/Y/1025"
            ],
            "amenities":[
                { "general" : [
                    "Car park",
                    "Free Wifi",
                    "Bar",
                    "Air Conditioning"
                ]},
                { "internet" : [
                    "Car park",
                    "Free Wifi",
                    "Bar",
                    "Air Conditioning"
                ]}
            ],
            "roomsRate":[
                {
                    "total":"500 EUR",
                    "earn" :"3.39 EUR",
                    "rooms":[

                        {
                            "type":"single ",
                            "board":"Bed and Breakfast",
                            "price":[ "199 EUR", "259 EUR"]
                        },
                        {
                            "type":"standard twin",
                            "board":"Bed and Breakfast",
                            "price":[ "199 EUR", "259 EUR"]
                        }
                    ]
                },
                {
                    "total":"500 EUR",
                    "earn" :"3.39 EUR",
                    "rooms":[

                        {
                            "type":"double ",
                            "board":"Bed and Breakfast",
                            "price":[ "199 EUR", "259 EUR"]
                        }
                    ]
                }
            ]
        },
        {
            "hid":"2",
            "sid":"59466213",
            "name":"Best Western Adams Inn Hotel",
            "star":"3",
            "cancellation" : "FREE Cancellation",
            "tripAdvisor":[
                {
                    "rate":"3.0",
                    "score":"1299"
                }
            ],
            "address":"29 Hancock Street , 02171 Boston, United States",
            "price":[
                {
                    "default":"199 EUR",
                    "old":"259 EUR",
                    "earn":"3,39"
                }
            ],
            "info": [
                ["Hotel Location", "Fancy staying at one of the first hotels built in the Boston area and designed by famous architect Stanford White?"] ,
                ["Hotel Rooms", "Fancy staying at one of the first hotels built in the Boston area and designed by famous architect Stanford White?"]
            ],
            "city":[
                {
                    "name":"Boston, MA",
                    "id":"1299"
                }
            ],
            "country":[
                {
                    "name":"United States",
                    "id":"5655"
                }
            ],
            "images":[
                "9/6/1/1/8/0/0/81169/Y/1025",
                "9/6/1/1/8/0/0/81169/Y/1025",
                "9/6/1/1/8/0/0/81169/Y/1025",
                "9/6/1/1/8/0/0/81169/Y/1025"
            ],
            "amenities":[
                { "general" : [
                    "Car park",
                    "Free Wifi",
                    "Bar",
                    "Air Conditioning"
                ]},
                { "internet" : [
                    "Car park",
                    "Free Wifi",
                    "Bar",
                    "Air Conditioning"
                ]}
            ],
            "roomsRate":[
                {
                    "total":"500 EUR",
                    "earn" :"3.39 EUR",
                    "rooms":[
                        {
                            "type":"standard twin",
                            "board":"Bed and Breakfast",
                            "price":[ "199 EUR", "259 EUR"]
                        },
                        {
                            "type":"standard twin",
                            "board":"Bed and Breakfast",
                            "price":[ "199 EUR", "259 EUR"]
                        }
                    ]
                }
            ]
        }
    );
});

var Hotels = require('../api/hotels/hotels.model');
Hotels.find({}).remove(function() {
  Hotels.create({
            "hid": "1",
            "sid":"59466212",
            "name": "Boston Buckminster Hotel",
            "address": "645 Beacon Street Ma 02215 Boston, United States",
            "price":[
            {
                "default":"199 EUR",
                "old":"259 EUR",
                "earn":"3,39"
            }
        ],
            "tripAdvisor":[
            {
                "rate":"3.0",
                "score":"1299"
            }
        ],
            "roomsRate":[
            {
                "total":"500 EUR",
                "earn" :"3.39 EUR",
                "rooms":[
                    {
                        "type":"standard twin",
                        "board":"Bed and Breakfast",
                        "price":["199 EUR", "259 EUR"]
                    },
                    {
                        "type":"standard twin",
                        "board":"Bed and Breakfast",
                        "price":["199 EUR", "259 EUR"]
                    }
                ]
            }
            ]
        },
      {
          "hid": "2",
          "sid":"59466213",
          "name": "Best Western Adams Inn Hotel",
          "address": "29 Hancock Street , 02171 Boston, United States",
          "price":[
              {
                  "default":"345 EUR",
                  "old":"456 EUR",
                  "earn":"2,77"
              }
          ],
          "tripAdvisor":[
              {
                  "rate":"4.0",
                  "score":"1345"
              }
          ],
          "roomsRate":[
              {
                  "total":"324 EUR",
                  "earn" :"2.77 EUR",
                  "rooms":[
                      {
                          "type":"standard twin",
                          "board":"Bed and Breakfast",
                          "price":["123 EUR", "199 EUR"]
                      },
                      {
                          "type":"standard twin",
                          "board":"Bed and Breakfast",
                          "price":["223 EUR", "333 EUR"]
                      }
                  ]
              }
          ]
      }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    country:[
          {
              name:'United States',
              code:'US'
          }
    ],
    mobilePhone: '123456',
    contactPhone: '98765',
    gender: 'mr',
    address: 'Mecidiyeköy/Şişli',
    surname: 'Test',
    city: 'Washington',
    postalCode: '34100',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    country:[
      {
          name:'United States',
          code:'US'
      }
    ],
    mobilePhone: '123456',
    contactPhone: '98765',
    gender: 'mr',
    address: 'Mecidiyeköy/Şişli',
    surname: 'Admin',
    city: 'Washington',
    postalCode: '34100'
  }, function() {
      console.log('finished populating users');
    }
  );
});

var Bookings = require('../api/bookings/bookings.model');
Bookings.find({}).remove(function() {
  Bookings.create({
    bid: '3',
    status: 'Cancelled',
    hotelName: 'Senator Barcelona Spa Hotel',
    city: 'Barcelona',
    checkIn: '28 Oct 2014',
    checkOut: '30 Oct 2014',
    total: ',00 EUR'
  },
  {
    bid: '2',
    status: 'Pending',
    hotelName: 'Barcelona Dream Hostal',
    city: 'Barcelona',
    checkIn: '23 Oct 2014',
    checkOut: '15 Oct 2014',
    total: '12,00 EUR'
  },
  {
    bid: '1',
    status: 'Confirmed',
    hotelName: 'Barcelona 360 Hostel',
    city: 'Barcelona',
    checkIn: '01 Dec 2014',
    checkOut: '31 Dec 2014',
    total: '112,00 EUR'
  }
  );
});

var Favorites = require('../api/favorites/favorites.model');
Favorites.find({}).remove(function() {
    Favorites.create({
    hid: '1',
    star: '3',
    hotelName: 'Senator Barcelona Spa Hotel',
    photo: '',
    address: '645 Beacon Street Ma 02215 Boston, United States',
    tripAdvisor:[
        {
            rate:'Good, 3.5/5.0',
            score:'1345'
        }
    ]
  },
  {
      hid: '2',
      star: '4',
      hotelName: 'Hilton Spa Hotel',
      photo: '',
      address: '645 Beacon Street Ma 02215 Barcelona, Spain',
      tripAdvisor:[
          {
              rate:'Very Good, 4.0/5.0',
              score:'345'
          }
      ]
  }
  );
});

var Rewards = require('../api/rewards/rewards.model');
Rewards.find({}).remove(function() {
    Rewards.create({
    rid: '1',
    status: 'Active',
    info: 'Below you can see your Member Rewards earned from each confirmed booking. Each reward has its own expiry date and needs to be used before expiry date.',
    price: '1000,00 EUR',
    total: '1000,00 EUR',
    validDates:[
        {
            startDate:'24.09.2014',
            endDate:'24.09.2015'
        }
    ]
  },
  {
      rid: '2',
      status: 'Passive',
      price: '352,56 EUR',
      validDates:[
          {
              startDate:'14.08.2013',
              endDate:'14.08.2014'
          }
      ]
  }
  );
});

var Search = require('../api/search/search.model');
Search.find({}).remove(function() {
    Search.create({
    room:[
        '1','2','3','4','5','6','7','8'
    ],
    adult:[
        '1','2','3','4','5','6','7','8'
    ],
    child:[
        '1','2','3','4','5','6','7','8'
    ]
  }
  );
});

var Resdetail = require('../api/resDetail/resDetail.model');
Resdetail.find({}).remove(function() {
    Resdetail.create({
          "bid":"1",
          "hid":"45656",
          "sid":"31213123",
          "status": "Confirmed",
          "hotel":[
              {
                  "name":"Boston Buckminster Hotel",
                  "star":"1",
                  "address":"645 Beacon Street Ma 02215 Boston, United States",
                  "checkIn":"29 Oct 2014 Tuesday",
                  "checkOut":"30 Oct 2014 Wednesday",
                  "photo":""
              }
          ],
          "cancellation" : [
              {
                  "cancPolicy":"-",
                  "type":"Cancellation",
                  "from":"28 Oct 2014",
                  "to":"28 Oct 2014",
                  "cancFree":"11 EUR",
                  "detail":"This is a non refundable booking no cancellation"
              }
          ],
          "roomDetails":[
              {
                  "rooms":[
                      {
                          "roomType":"Bed In Shared Room 8 People",
                          "boardType":"Room Only",
                          "quantity":"1",
                          "adults":"2",
                          "child":"-",
                          "roomRate":"11 EUR"
                      },
                      {
                          "roomType":"Economy Plus Double (non Refundable)",
                          "boardType":"Room Only",
                          "quantity":"1",
                          "adults":"1",
                          "child":"-",
                          "roomRate":"11 EUR"
                      }
                  ]

              }
          ],
          "paymentDetails":[
              {
                  "owner":"REWARDS",
                  "cardNumber":"-",
                  "status":"Approved",
                  "date":"04 Nov 2014",
                  "total":"11,00 EUR"
              }
          ],
          "guestDetails":[
              {
                  "roomType":"Bed In Shared Room 8 People",
                  "firstName":"oguzhan",
                  "lastName":"colak",
                  "gender":"mr"
              },
              {
                  "roomType":"Economy Plus Double (non Refundable)",
                  "firstName":"zehra",
                  "lastName":"colak",
                  "gender":"mrs"
              }
          ]
      },
      {
          "bid":"2",
          "hid":"987",
          "sid":"7895645",
          "status":"Pending",
          "hotel":[
              {
                  "name":"Barcelona Dream Hostal",
                  "star":"1",
                  "address":"Ave. Alfonso Xiii - 28 B, Barcelona / Spain",
                  "checkIn":"04 Jan 2015 Sunday",
                  "checkOut":"05 Jan 2015 Monday",
                  "rewards":",36",
                  "photo":""
              }
          ],
          "cancellation" : [
              {
                  "cancPolicy":"-",
                  "type":"Cancellation",
                  "from":"28 Oct 2014",
                  "to":"28 Oct 2014",
                  "cancFree":"12 EUR",
                  "detail":"This is a non refundable booking no cancellation"
              }
          ],
          "roomDetails":[
              {
                  "rooms":[
                      {
                          "roomType":"Economy Plus Double (non Refundable)",
                          "boardType":"Room Only",
                          "quantity":"1",
                          "adults":"2",
                          "child":"-",
                          "roomRate":"12 EUR"
                      },
                      {
                          "roomType":"Bed In Shared Room 8 People",
                          "boardType":"Bed And Breakfast",
                          "quantity":"1",
                          "adults":"1",
                          "child":"-",
                          "roomRate":"12 EUR"
                      }
                  ]

              }
          ],
          "rewardsPayment":[
              {
                  "currency":"EUR",
                  "bonusTotal":"1000"
              }
          ],
          "cardPayment":
              [
                  {
                      "resTotal":"12 EUR"
                  }
              ]
      },
      {
          "bid":"3",
          "hid":"3123123",
          "sid":"376857",
          "status":"Cancelled",
          "hotel":[
              {
                  "name":"Senator Barcelona Spa Hotel",
                  "star":"4",
                  "address":"C/ Cardenal Reig 11 Bis, Barcelona, Spain - 08028 Barcelona / Spain",
                  "checkIn":"29 Oct 2014 Thursday",
                  "checkOut":"30 Oct 2014 Wednesday",
                  "photo":"-"
              }
          ],
          "roomDetails":[
              {
                  "rooms":[
                      {
                          "roomType":"Economy Plus Double (non Refundable)",
                          "boardType":"Room Only",
                          "quantity":"1",
                          "adults":"2",
                          "child":"-",
                          "roomRate":"EUR"
                      },
                      {
                          "roomType":"King Size Bed",
                          "boardType":"Room Only",
                          "quantity":"1",
                          "adults":"1",
                          "child":"-",
                          "roomRate":"EUR"
                      }
                  ]

              }
          ]
      }
  );
});

var Country = require('../api/country/country.model');
Country.find({}).remove(function() {
    Country.create({
        "countries":[
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Andorra', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'s Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'Rwanda', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
        ]}
    );
});