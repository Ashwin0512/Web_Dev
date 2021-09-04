function clock()    {
    const h_span = document.getElementById("h");
    const m_span = document.getElementById("m");
    const s_span = document.getElementById("s");

    function to12(num) {
        if(num>12)  {
            num -= 12;
        }
        return num;
    }
    function addZero(num)   {
        if(num<10)  {
            num = '0'+num;
        }
        return num;
    }

    let date = new Date();
    let h = date.getHours();
    h = to12(h);
    h = addZero(h);
    let m = addZero(date.getMinutes()); 
    let s = addZero(date.getSeconds());

    h_span.innerHTML = `${h}:`;
    m_span.innerHTML = `${m}:`;
    s_span.innerHTML = s;

}

setInterval(clock,1000);