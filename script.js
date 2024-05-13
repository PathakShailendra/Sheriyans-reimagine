function cardScroller(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger:"#main",
        // markers:true,
        start:"38% 50%",
        end:"100% 50%",
        scrub:2,
        pin:true
    }});
    tl
    .to(".text",{
        top: "-7%",
    },'a')
    .to("#card-one",{
        top: "35%",
    },'a')
    .to("#card-two",{
        top: "130%"
    },'a')
    .to("#card-two",{
        top: "35%"
    },'b')
    .to("#card-one",{
        width: "65%",
        height: "65vh"
    },'b')
    .to("#card-three",{
        top: "130%"
    }, 'b')
    .to("#card-three",{
        top: "35%"
    }, 'c')
    .to("#card-two",{
        width: "65%",
        height: "65vh"
    },'c')
    .to("card-four",{
        top:"130%",
    },'c')
    .to("#card-four",{
        top:"35%"
    },'d')
    .to("#card-three",{
        width:"65%",
        height:"65vh"
    },'d')
    .to("#card-five",{
        top:"130%"
    },'d')
    .to("#card-five",{
        top:"35%"
    },'e')
    .to("#card-four",{
        width:"65%",
        height:"65vh"
    },'e')
    .to("#card-six",{
        top:"130%"
    },'e')
    .to("#card-six",{
        top:"35%"
    },'f')
    .to("#card-five",{
        width:"65%",
        height:"65vh"
    },'f')
    .to("#card-seven",{
        top:"130%"
    },'f')
    .to("#card-seven",{
        top:"35%"
    },'g')
    .to("#card-six",{
        width:"65%",
        height:"65vh"
    },'g')
    .to("#card-eight",{
        top:"130%"
    },'g')
    .to("#card-eight",{
        top:"35%"
    },'h')
    .to("#card-seven",{
        width:"65%",
        height:"65vh"
    },'h')

    
    
}
cardScroller();

function rotator(){
    const str = "BMW BMW BMW BMW BMW BMW BMW BMW";
    const text = document.getElementById("text");
console.log(text)
window.onload =  () => {
for(let i=0; i<str.length; i++){
    let span = document.createElement("span")
    span.innerHTML = str[i];
    text.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`
}
}
}

rotator()