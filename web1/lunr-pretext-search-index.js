var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2",
  "level": "1",
  "url": "root-1-2-2.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction  The 142 textbook is free... refer to sections 1.1, 1.2, 1.3 for this worksheet.  "
},
{
  "id": "root-1-2-3",
  "level": "1",
  "url": "root-1-2-3.html",
  "type": "Worksheet",
  "number": "2",
  "title": "Getting Warmed Up and In the Right Mindset...",
  "body": " Getting Warmed Up and In the Right Mindset...   This is an image      Explain the meaning of .      If , then  .    If and , then  .    If and , then  .    If , what do we know about ?    "
},
{
  "id": "root-1-2-3-3",
  "level": "2",
  "url": "root-1-2-3.html#root-1-2-3-3",
  "type": "Worksheet Exercise",
  "number": "2.1",
  "title": "",
  "body": "  Explain the meaning of .   "
},
{
  "id": "root-1-2-4",
  "level": "1",
  "url": "root-1-2-4.html",
  "type": "Section",
  "number": "3",
  "title": "Let Us Get Our Hands On!",
  "body": " Let Us Get Our Hands On!    Complete the graph below so has the domain , , and .    Complete the tables below to estimate numerically. If the limit does not exist, state so and use limit notation to describe any infinite behavior. Round your answers to four decimal places (if necessary).  Left-hand limit    Variable  Variable                      Right-hand limit    Variable  Variable                        Set up a table to estimate numerically. When creating your table, show at least three -values approaching from each side and their corresponding function values in the table. If the limit does not exist, state so and use limit notation to describe any infinite behavior. Round your answers to four decimal places (if necessary).    Given the graph of below and , find .    Given    Find the following limits algebraically. If the limit does not exist, state so and use limit notation to describe any infinite behavior. Round your answers to four decimal places (if necessary).    For each graph below, find the indicated limit.    Jenn is trying to find given .    "
},
{
  "id": "root-1-2-4-2-2-1-2",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-2-2-1-2",
  "type": "Table",
  "number": "3.1",
  "title": "Left-hand limit",
  "body": " Left-hand limit    Variable  Variable                    "
},
{
  "id": "root-1-2-4-2-2-1-3",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-2-2-1-3",
  "type": "Table",
  "number": "3.2",
  "title": "Right-hand limit",
  "body": " Right-hand limit    Variable  Variable                    "
},
{
  "id": "root-1-2-5",
  "level": "1",
  "url": "root-1-2-5.html",
  "type": "Section",
  "number": "4",
  "title": "Now...Grades Go Up!",
  "body": " Now...Grades Go Up!    The mathematical notation means    we need to find the value of the function at .    we need to investigate the -values of as gets very near from both the left and right sides of , but not necessarily at .    we need to find the horizontal asymptotes.    we need to find the instantaneous rate of change.    we need to investigate the -values as we approach only on the right side.      Find . If the limit does not exist, but has infinite behavior, use limit notation to describe the infinite behavior of the function as .             DNE, but has infinite behavior that can be described as .    DNE, but has infinite behavior that can be described as .           Find .         DNE              None of these.     The graph of is not continuous at because .25in0.05mm I. is not defined. II. does not exist. III.    I and III only    III only    II and III only    I, II, and III    II only    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
