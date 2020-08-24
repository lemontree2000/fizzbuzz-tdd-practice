# TDD FizzBuzz 练习

## 需求

> 你是一名体育老师，体育课中你想组织学生玩一个游戏

1. 让所有学生排成一队，然后按顺序报数。
2. 学生报数时，如果所报数字是 3 的倍数， 那么不能说该数字，二要说Fizz；如果报数字的是5的倍数，那么要说Buzz； 如果所报数字是7的倍数，那么要说Whizz
3. 学生报数是，如果报数数字同时是两个特殊数的倍数情况下，也要特殊处理，比例3和5的倍数，那么不能说该数字，而是要说FizzBuzz，以此类推。如果同时是三个特殊的倍数，那么要说FizzBuzzWhizz。
4. 学生报数是，如果所报数字包含了3，那么也不能说该数字，而是要说相应的单词，比如要报13的同学应该说Fizz
5. 如果数字中包含了3，那么忽略规则2和规则3，比如要报30的同学只报Fizz，不报FizzBuzz。

## Test Case

### Gievn-When-Then

在编写测试方法时，应该遵循 Given-When-Then 模式（在给定xx情况下，当做了xx操作，会得到xx反馈）这种模式可以让开发人员专注并思考以下这几件事情：

* Given：驱动我们思考这个测试是在一个怎样的上下文中，用到哪些对象，以便于思考需要创建哪些上下文和对象。
* When：驱动我们站在用户的角度去思考这个行为是什么，它有哪些输入，以便于思考方法的命名和入参。
* Then：驱动我们思考行为的反馈是什么，以便于思考方法的返回值。

### 整理后的Case
* 包含了3
    * Given 序号包含3，When报数，then 报Fizz
* 非包含3
    * Given 3的倍数，When报数，then 报Fizz
    * Given 5的倍数，When报数，then 报Buzz
    * Given 7的倍数，When报数，then 报Whizz
    * Given 7的倍数并且是5的倍数，When报数，then 报BuzzWhizz
    * Given 7的倍数并且是3的倍数，When报数，then 报FizzWhizz
    * Given 5的倍数并且是3的倍数，When报数，then 报fizzBuzz
    * Given 5的倍数并且是3的倍数且是7的倍数，When报数，then 报FizzBuzzWhizz
