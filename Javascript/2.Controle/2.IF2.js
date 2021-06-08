function teste1(num)
{
    if(num>7)
        console.log(num)
          //O JS permite udsr ums única sentença de código para o IF sem o bloco!
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num)
{
    if(num>7); //NUNCA utlize ";"
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)