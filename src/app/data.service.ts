import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listDataInterface:any=[];
  currentEntry:any={};
  currentEntryID:string='';
  
  listData:any= [
      {
        "id": "1",
        "name": "men1",
        "description": "size free 1",
        "like_count": 91,
        "cot_count": 59,
        "price": 51,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men1",
        "category_id": 1
      },
      {
        "id": "2",
        "name": "men2",
        "description": "size free 1",
        "like_count": 0,
        "cot_count": 0,
        "price": 10000,
        "is_sold_out": true,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men2",
        "category_id": 2
      },
      {
        "id": "3",
        "name": "men3",
        "description": "size free 1",
        "like_count": 17,
        "cot_count": 58,
        "price": 1500,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men3",
        "category_id": 3
      },
      {
        "id": "4",
        "name": "men4",
        "description": "size free 1",
        "like_count": 0,
        "cot_count": 0,
        "price": 38,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men4",
        "category_id": 4
      },
      {
        "id": "5",
        "name": "men5",
        "description": "size free 1",
        "like_count": 19,
        "cot_count": 32,
        "price": 23,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men5",
        "category_id": 5
      },
      {
        "id": "6",
        "name": "men6",
        "description": "size free 1",
        "like_count": 38,
        "cot_count": 66,
        "price": 92,
        "is_sold_out": true,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men6",
        "category_id": 1
      },
      {
        "id": "7",
        "name": "men7",
        "description": "size free 1",
        "like_count": 17,
        "cot_count": 66,
        "price": 33,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men7",
        "category_id": 2
      },
      {
        "id": "8",
        "name": "men8",
        "description": "size free 1",
        "like_count": 41,
        "cot_count": 48,
        "price": 75,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men8",
        "category_id": 3
      },
      {
        "id": "9",
        "name": "men9",
        "description": "size free 1",
        "like_count": 6,
        "cot_count": 27,
        "price": 56,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men9",
        "category_id": 4
      },
      {
        "id": "10",
        "name": "men10",
        "description": "size free 1",
        "like_count": 60,
        "cot_count": 48,
        "price": 33,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men10",
        "category_id": 5
      },
      {
        "id": "11",
        "name": "men11",
        "description": "size free 1",
        "like_count": 61,
        "cot_count": 12,
        "price": 81,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men11",
        "category_id": 1
      },
      {
        "id": "12",
        "name": "men12",
        "description": "size free 1",
        "like_count": 81,
        "cot_count": 81,
        "price": 72,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men12",
        "category_id": 2
      },
      {
        "id": "13",
        "name": "men13",
        "description": "size free 1",
        "like_count": 40,
        "cot_count": 92,
        "price": 21,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men13",
        "category_id": 3
      },
      {
        "id": "14",
        "name": "men14",
        "description": "size free 1",
        "like_count": 21,
        "cot_count": 89,
        "price": 30,
        "is_sold_out": true,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men14",
        "category_id": 4
      },
      {
        "id": "15",
        "name": "men15",
        "description": "size free 1",
        "like_count": 92,
        "cot_count": 61,
        "price": 51,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men15",
        "category_id": 5
      },
      {
        "id": "16",
        "name": "men16",
        "description": "size free 1",
        "like_count": 4,
        "cot_count": 70,
        "price": 66,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men16",
        "category_id": 1
      },
      {
        "id": "17",
        "name": "men17",
        "description": "size free 1",
        "like_count": 98,
        "cot_count": 47,
        "price": 42,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men17",
        "category_id": 2
      },
      {
        "id": "18",
        "name": "men18",
        "description": "size free 1",
        "like_count": 1,
        "cot_count": 11,
        "price": 25,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men18",
        "category_id": 3
      },
      {
        "id": "19",
        "name": "men19",
        "description": "size free 1",
        "like_count": 41,
        "cot_count": 7,
        "price": 68,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men19",
        "category_id": 4
      },
      {
        "id": "20",
        "name": "men20",
        "description": "size free 1",
        "like_count": 94,
        "cot_count": 55,
        "price": 19,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men20",
        "category_id": 5
      },
      {
        "id": "21",
        "name": "men21",
        "description": "size free 1",
        "like_count": 72,
        "cot_count": 52,
        "price": 56,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men21",
        "category_id": 1
      },
      {
        "id": "22",
        "name": "men22",
        "description": "size free 1",
        "like_count": 37,
        "cot_count": 60,
        "price": 4,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men22",
        "category_id": 2
      },
      {
        "id": "23",
        "name": "men23",
        "description": "size free 1",
        "like_count": 12,
        "cot_count": 85,
        "price": 35,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men23",
        "category_id": 3
      },
      {
        "id": "24",
        "name": "men24",
        "description": "size free 1",
        "like_count": 79,
        "cot_count": 57,
        "price": 3,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men24",
        "category_id": 4
      },
      {
        "id": "25",
        "name": "men25",
        "description": "size free 1",
        "like_count": 55,
        "cot_count": 78,
        "price": 8,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men25",
        "category_id": 5
      },
      {
        "id": "26",
        "name": "men26",
        "description": "size free 1",
        "like_count": 19,
        "cot_count": 18,
        "price": 44,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men26",
        "category_id": 1
      },
      {
        "id": "27",
        "name": "men27",
        "description": "size free 1",
        "like_count": 4,
        "cot_count": 74,
        "price": 87,
        "is_sold_out": true,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men27",
        "category_id": 2
      },
      {
        "id": "28",
        "name": "men28",
        "description": "size free 1",
        "like_count": 40,
        "cot_count": 7,
        "price": 10,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men28",
        "category_id": 3
      },
      {
        "id": "29",
        "name": "men29",
        "description": "size free 1",
        "like_count": 32,
        "cot_count": 8,
        "price": 84,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men29",
        "category_id": 4
      },
      {
        "id": "30",
        "name": "men30",
        "description": "size free 1",
        "like_count": 63,
        "cot_count": 94,
        "price": 54,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men30",
        "category_id": 5
      },
      {
        "id": "31",
        "name": "men31",
        "description": "size free 1",
        "like_count": 35,
        "cot_count": 60,
        "price": 7,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men31",
        "category_id": 1
      },
      {
        "id": "32",
        "name": "men32",
        "description": "size free 1",
        "like_count": 99,
        "cot_count": 30,
        "price": 34,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men32",
        "category_id": 2
      },
      {
        "id": "33",
        "name": "men33",
        "description": "size free 1",
        "like_count": 6,
        "cot_count": 74,
        "price": 19,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men33",
        "category_id": 3
      },
      {
        "id": "34",
        "name": "men34",
        "description": "size free 1",
        "like_count": 24,
        "cot_count": 95,
        "price": 96,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men34",
        "category_id": 4
      },
      {
        "id": "35",
        "name": "men35",
        "description": "size free 1",
        "like_count": 15,
        "cot_count": 52,
        "price": 7,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men35",
        "category_id": 5
      },
      {
        "id": "36",
        "name": "men36",
        "description": "size free 1",
        "like_count": 41,
        "cot_count": 12,
        "price": 6,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men36",
        "category_id": 1
      },
      {
        "id": "37",
        "name": "men37",
        "description": "size free 1",
        "like_count": 48,
        "cot_count": 84,
        "price": 42,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men37",
        "category_id": 2
      },
      {
        "id": "38",
        "name": "men38",
        "description": "size free 1",
        "like_count": 62,
        "cot_count": 35,
        "price": 48,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men38",
        "category_id": 3
      },
      {
        "id": "39",
        "name": "men39",
        "description": "size free 1",
        "like_count": 59,
        "cot_count": 1,
        "price": 82,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men39",
        "category_id": 4
      },
      {
        "id": "40",
        "name": "men40",
        "description": "size free 1",
        "like_count": 74,
        "cot_count": 99,
        "price": 8,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men40",
        "category_id": 5
      },
      {
        "id": "41",
        "name": "men41",
        "description": "size free 1",
        "like_count": 33,
        "cot_count": 55,
        "price": 27,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men41",
        "category_id": 1
      },
      {
        "id": "42",
        "name": "men42",
        "description": "size free 1",
        "like_count": 34,
        "cot_count": 50,
        "price": 27,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men42",
        "category_id": 2
      },
      {
        "id": "43",
        "name": "men43",
        "description": "size free 1",
        "like_count": 99,
        "cot_count": 61,
        "price": 8,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men43",
        "category_id": 3
      },
      {
        "id": "44",
        "name": "men44",
        "description": "size free 1",
        "like_count": 29,
        "cot_count": 23,
        "price": 35,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men44",
        "category_id": 4
      },
      {
        "id": "45",
        "name": "men45",
        "description": "size free 1",
        "like_count": 54,
        "cot_count": 16,
        "price": 94,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men45",
        "category_id": 5
      },
      {
        "id": "46",
        "name": "men46",
        "description": "size free 1",
        "like_count": 50,
        "cot_count": 78,
        "price": 1,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men46",
        "category_id": 1
      },
      {
        "id": "47",
        "description": "size free 1",
        "name": "men47",
        "like_count": 22,
        "cot_count": 89,
        "price": 5,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men47",
        "category_id": 2
      },
      {
        "id": "48",
        "name": "men48",
        "description": "size free 1",
        "like_count": 96,
        "cot_count": 52,
        "price": 74,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men48",
        "category_id": 3
      },
      {
        "id": "49",
        "name": "men49",
        "description": "size free 1",
        "like_count": 43,
        "cot_count": 30,
        "price": 35,
        "is_sold_out": true,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men49",
        "category_id": 4
      },
      {
        "id": "50",
        "name": "men50",
        "description": "size free 1",
        "like_count": 10,
        "cot_count": 95,
        "price": 78,
        "is_sold_out": false,
        "shipping_fee": "送料込み",
        "image": "http://dummyimage.com/400x400/000/fff?text=men50",
        "category_id": 5
      }
    ];
  
  categoryData = [
      {
        "id": "1",
        "name": "すべて",
        "click":false
      },
      {
        "id": "2",
        "name": "レディース",
        "click":false
      },
      {
        "id": "3",
        "name": "ベビー・キッズ",
        "click":false
      },
      {
        "id": "4",
        "name": "エンタメ",
        "click":false
      },
      {
        "id": "5",
        "name": "メンズ",
        "click":false
      }
    ];


    //checking whether the user is authenticated or not 
  isAuthenticated()
  {
    if(this.currentEntryID == '')
    {
      return false;
    }

    else
    {
      return true;
    }
    
  }
}
