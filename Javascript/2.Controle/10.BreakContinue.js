const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if(x==5) {
        break //break é amigo do for, while e do switch. Ele não age com o if.
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums) {
    if(y==5) {
        continue  //age no for e no while. Para e volta pro laço.
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums) {  //não use! Só efeito didático!! for rotulado
    for(b in nums) {
        if(a==2 && b==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log(`Fim!!!`)