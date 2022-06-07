# robot_store

Robot-Store API
----
## GET all product info from the API

### URL

/products
 
### Method:
 `GET`

### URL Params
There are no required or optional params.

### Success Response:

   Code: 200 <br />
   Content:
  ```
    {
      "status": 200,
      "message": "The database request was successful",
      "data": [
        {
          "id": 1,
          "image": "https://binaryville.com/images/products/fred-0s1s-apron-black.jpg",
          "title": "It's All 0's and 1's to Me! Apron",
          "price": 24
        },
        {
          "id": 2,
          "image": "https://binaryville.com/images/products/dolores-compute-apron-black.jpg",
          "title": "I Compute, Therefore I Am Apron",
          "price": 24
        },
        {
          "id": 3,
          "image": "https://binaryville.com/images/products/bubbles-gumball-apron-black.jpg",
          "title": "A Gumball for Your Thoughts Apron",
          "price": 24
        }
      } 
    ]
  }

```
 

## Error response
Code: 404 <br />
Content:
    
  
        {
        "status": 404,
        "message": "Oh no! The page you were looking for has not been found!"
        }
  

## GET single product using given ID from the API

### URL
/restaurants/{id}

### Method 
`GET`

### URL Params 
#### Required:
`id`

#### Optional:
There are no optional params

#### Example 
`/products/6`

### Success Response:

Code: 200 <br />
Content:
  ```
    {
        {
        "status": 200,
        "message": "The database request was successful",
        "data": {
            "id": 6,
            "title": "I Compute, Therefore I Am Baseball Hat",
            "price": 29,
            "image": "https://binaryville.com/images/products/dolores-compute-baseballhat-black.jpg",
            "category_id": 2,
            "character_id": "Baseball Hats",
            "character": "Dolores",
            "description": "Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill. Featuring our original Binaryville artwork, screen-printed with PVC- and phthalate-free inks. Complete with matching, sewn eyelets, and adjustable fabric closure. ",
            "image2": "https://binaryville.com/images/products/dolores-compute-baseballhat-gray.jpg",
            "image3": null
       }
    }

```
### Error response:
code: 400 <br/>
content:
````
{
    "status": 400,
    "message": "There is no item matching that ID, please try again"
}
````

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._>

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 
