# robot_store

## Robot-Store API
----
GET all product info from the API

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
 

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

    * **Code:** 401 UNAUTHORIZED <br />
      **Content:** `{ error : "Log in" }`

  OR

    * **Code:** 422 UNPROCESSABLE ENTRY <br />
      **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._>

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 
