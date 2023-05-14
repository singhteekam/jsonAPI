## jsonAPI


### Available json files:
**quiz.json**
| Syntax | Example | Output |
| ----------- | ----------- |
| /quiz | Display quiz.json | |
| /quiz/easy/allcategories/:id | /quiz/easy/allcategories/1 | Value at index 1 of Easy->Allcategories |
| /quiz/easy/sports/:id | /quiz/easy/sports/1 | Value at index 1 of Easy->Sports |
| /quiz/medium/allcategories/:id | /quiz/medium/allcategories/1 | Value at index 1 of Medium->Allcategories |
| /quiz/medium/sports/:id | /quiz/medium/sports/1 | Value at index 1 of Medium->Sports |
| /quiz/hard/allcategories/:id | /quiz/hard/allcategories/1 | Value at index 1 of Hard->Allcategories |
| /quiz/hard/sports/:id | /quiz/hard/sports/1 | Value at index 1 of Hard->Sports |

**fruits.json**
| Syntax | Example | Output |
| ----------- | ----------- |
| /fruits | Display fruits.json | |
| /fruits/:id | /fruits/2 | Value at index 2 of array |

# Steps:
## Cloning
Clone this repo using below command in your terminal
```bash
git clone https://github.com/singhteekam/jsonAPI.git
```
## Install libraries
Install all the required libraries in your root directory:
```bash
npm install
```
## Run
Run below command in terminal
```bash
npm start
```
If you have nodemon installed then run
```bash
nodemon
```

## Contributing
Pull requests are welcome. 

***

### Personal website
[Click to view my portfolio website](http://www.singhteekam.in/)