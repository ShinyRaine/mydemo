# arr=(A B "C" D)
# arr[5]="f"
#
# echo ${arr[@]}
# echo ${arr[5]}

# 输出参数
# echo $0
# echo $1
# echo $@

#比较、if
# a=10
# if [[ a -lt 100 ]]
# then
#   echo 'true'
# fi

#函数
Fun(){
  echo "输入第一个数字"
  read a
  echo "输入第二个数字"
  read b
  echo "和为"
  return $(($a+$b))
}
Fun
echo $?
