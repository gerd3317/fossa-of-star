function fall(event) {
    var x=event.clientX;
    var y=event.clientY;
    document.getElementById('leaf').style.top=`${27+x*0.01+2}%`;
    document.getElementById('leaf').style.right=`${10-y*0.01+2}%`;
    document.getElementById('leaf').style.transform=`rotateY(${x}deg)`;

    document.getElementById('leaf1').style.top=`${28+x*0.01+4}%`;
    document.getElementById('leaf1').style.left=`${15-y*0.01}%`;
    document.getElementById('leaf1').style.transform=`rotateY(${x}deg)`;

    document.getElementById('leaf2').style.top=`${12+x*0.01+2}%`;
    document.getElementById('leaf2').style.right=`${5+y*0.01+2}%`;
    document.getElementById('leaf2').style.transform=`rotate(${y}deg)`;

    document.getElementById('leaf3').style.top=`${11+x*0.015+4}%`;
    document.getElementById('leaf3').style.left=`${15+y*0.01-2}%`;
    document.getElementById('leaf3').style.transform=`rotateY(${x}deg)`;

    document.getElementById('leaf4').style.top=`${18+x*0.02+1}%`;
    document.getElementById('leaf4').style.right=`${12-y*0.01+2}%`;

    document.getElementById('leaf5').style.top=`${18+x*0.01+2}%`;
    document.getElementById('leaf5').style.left=`${12-y*0.01+0.2}%`;

    document.getElementById('leaf6').style.top=`${32+x*0.01}%`;
    document.getElementById('leaf6').style.right=`${8-y*0.01+1}%`;
    document.getElementById('leaf6').style.transform=`rotate(${y*0.3}deg)`;

    document.getElementById('leaf7').style.transform=`rotate(${y*0.02}deg)`;

    document.getElementById('leaf8').style.transform=`rotate(${y*0.01}deg)`;

    document.getElementById('leaf9').style.transform=`rotate(${1+y*0.02}deg)`;

    var waiterMove;
    if ((x>=0&&x<=700)||(y>=301&&y<=600)) {
      waiterMove=1;
    } else if((x>=701&&x<=1400)||(y>=0&&y<=300)){
      waiterMove=2;
    }else{
      waiterMove=3;
    }
    document.getElementById('waiter').src=`img/waiterSet/waiter${waiterMove}.png`;
    document.getElementById('waiter').style.transform=`scale(${1+y*0.00005  },${1+y*0.00005})`;
};

document.addEventListener('mousemove', fall, false);