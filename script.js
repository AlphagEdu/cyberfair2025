function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})


gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})


gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page-bottom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity:0
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl.to("#page1>h1",{
    top:`-50%`
})






var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl1.to("#page2>h1",{
    top:`-50%`
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl2.to("#page4>#center-page4",{
    top:`-50%`
})



function canvas(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
unscreen-001.png
unscreen-002.png
unscreen-003.png
unscreen-004.png
unscreen-005.png
unscreen-006.png
unscreen-007.png
unscreen-008.png
unscreen-009.png
unscreen-010.png
unscreen-011.png
unscreen-012.png
unscreen-013.png
unscreen-014.png
unscreen-015.png
unscreen-016.png
unscreen-017.png
unscreen-018.png
unscreen-019.png
unscreen-020.png
unscreen-021.png
unscreen-022.png
unscreen-023.png
unscreen-024.png
unscreen-025.png
unscreen-026.png
unscreen-027.png
unscreen-028.png
unscreen-029.png
unscreen-030.png
unscreen-031.png
unscreen-032.png
unscreen-033.png
unscreen-034.png
unscreen-035.png
unscreen-036.png
unscreen-037.png
unscreen-038.png
unscreen-039.png
unscreen-040.png
unscreen-041.png
unscreen-042.png
unscreen-043.png
unscreen-044.png
unscreen-045.png
unscreen-046.png
unscreen-047.png
unscreen-048.png
unscreen-049.png
unscreen-050.png
unscreen-051.png
unscreen-052.png
unscreen-053.png
unscreen-054.png
unscreen-055.png
unscreen-056.png
unscreen-057.png
unscreen-058.png
unscreen-059.png
unscreen-060.png
unscreen-061.png
unscreen-062.png
unscreen-063.png
unscreen-064.png
unscreen-065.png
unscreen-066.png
unscreen-067.png
unscreen-068.png
unscreen-069.png
unscreen-070.png
unscreen-071.png
unscreen-072.png
unscreen-073.png
unscreen-074.png
unscreen-075.png
unscreen-076.png
unscreen-077.png
unscreen-078.png
unscreen-079.png
unscreen-080.png
unscreen-081.png
unscreen-082.png
unscreen-083.png
unscreen-084.png
unscreen-085.png
unscreen-086.png
unscreen-087.png
unscreen-088.png
unscreen-089.png
unscreen-090.png
unscreen-091.png
unscreen-092.png
unscreen-093.png
unscreen-094.png
unscreen-095.png
unscreen-096.png
unscreen-097.png
unscreen-098.png
unscreen-099.png
unscreen-100.png
unscreen-101.png
unscreen-102.png
unscreen-103.png
unscreen-104.png
unscreen-105.png
unscreen-106.png
unscreen-107.png
unscreen-108.png
unscreen-109.png
unscreen-110.png
unscreen-111.png
unscreen-112.png
unscreen-113.png
unscreen-114.png
unscreen-115.png
unscreen-116.png
unscreen-117.png
unscreen-118.png
unscreen-119.png
unscreen-120.png
unscreen-121.png
unscreen-122.png
unscreen-123.png
unscreen-124.png
unscreen-125.png
unscreen-126.png
unscreen-127.png
unscreen-128.png
unscreen-129.png
unscreen-130.png
unscreen-131.png
unscreen-132.png
unscreen-133.png
unscreen-134.png
unscreen-135.png
unscreen-136.png
unscreen-137.png
unscreen-138.png
unscreen-139.png
unscreen-140.png
unscreen-141.png
unscreen-142.png
unscreen-143.png
unscreen-144.png
unscreen-145.png
unscreen-146.png
unscreen-147.png
unscreen-148.png
unscreen-149.png
unscreen-150.png
unscreen-151.png
unscreen-152.png
unscreen-153.png
unscreen-154.png
unscreen-155.png
unscreen-156.png
unscreen-157.png
unscreen-158.png
unscreen-159.png
unscreen-160.png
unscreen-161.png
unscreen-162.png
unscreen-163.png
unscreen-164.png
unscreen-165.png
unscreen-166.png
unscreen-167.png
unscreen-168.png
unscreen-169.png
unscreen-170.png
unscreen-171.png
unscreen-172.png
unscreen-173.png
unscreen-174.png
unscreen-175.png
unscreen-176.png
unscreen-177.png
unscreen-178.png
unscreen-179.png
unscreen-180.png
unscreen-181.png
unscreen-182.png
unscreen-183.png
unscreen-184.png
unscreen-185.png
unscreen-186.png
unscreen-187.png
unscreen-188.png
unscreen-189.png
unscreen-190.png
unscreen-191.png
unscreen-192.png
unscreen-193.png
unscreen-194.png
unscreen-195.png
unscreen-196.png
unscreen-197.png
unscreen-198.png
unscreen-199.png
unscreen-200.png
unscreen-201.png
unscreen-202.png
unscreen-203.png
unscreen-204.png
unscreen-205.png
unscreen-206.png
unscreen-207.png
unscreen-208.png
unscreen-209.png
unscreen-210.png
unscreen-211.png
unscreen-212.png
unscreen-213.png
unscreen-214.png
unscreen-215.png
unscreen-216.png
unscreen-217.png
unscreen-218.png
unscreen-219.png
unscreen-220.png
unscreen-221.png
unscreen-222.png
unscreen-223.png
unscreen-224.png
unscreen-225.png
unscreen-226.png
unscreen-227.png
unscreen-228.png
unscreen-229.png
unscreen-230.png
unscreen-231.png
unscreen-232.png
unscreen-233.png
unscreen-234.png
unscreen-235.png
unscreen-236.png
unscreen-237.png
unscreen-238.png
unscreen-239.png
unscreen-240.png
unscreen-241.png
unscreen-242.png
unscreen-243.png
unscreen-244.png
unscreen-245.png
unscreen-246.png
unscreen-247.png
unscreen-248.png
unscreen-249.png
unscreen-250.png
unscreen-251.png
unscreen-252.png
unscreen-253.png
unscreen-254.png
unscreen-255.png
unscreen-256.png
unscreen-257.png
unscreen-258.png
unscreen-259.png
unscreen-260.png
unscreen-261.png
unscreen-262.png
unscreen-263.png
unscreen-264.png
unscreen-265.png
unscreen-266.png
unscreen-267.png
unscreen-268.png
unscreen-269.png
unscreen-270.png
unscreen-271.png
unscreen-272.png
unscreen-273.png
unscreen-274.png
unscreen-275.png
unscreen-276.png
unscreen-277.png
unscreen-278.png
unscreen-279.png
unscreen-280.png
unscreen-281.png
unscreen-282.png
unscreen-283.png
unscreen-284.png
unscreen-285.png
unscreen-286.png
unscreen-287.png
unscreen-288.png
unscreen-289.png
unscreen-290.png
unscreen-291.png
unscreen-292.png
unscreen-293.png
unscreen-294.png
unscreen-295.png
unscreen-296.png
unscreen-297.png
unscreen-298.png
unscreen-299.png
unscreen-300.png
`;
  return data.split("\n")[index];
}

const frameCount = 198;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();



function canvas1(){
  const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
.//vision canvas images/007.jpg
.//vision canvas images/008.jpg
.//vision canvas images/009.jpg
.//vision canvas images/010.jpg
.//vision canvas images/011.jpg
.//vision canvas images/012.jpg
.//vision canvas images/013.jpg
.//vision canvas images/014.jpg
.//vision canvas images/015.jpg
.//vision canvas images/016.jpg
.//vision canvas images/017.jpg
.//vision canvas images/018.jpg
.//vision canvas images/019.jpg
.//vision canvas images/020.jpg
.//vision canvas images/021.jpg
.//vision canvas images/022.jpg
.//vision canvas images/023.jpg
.//vision canvas images/024.jpg
.//vision canvas images/025.jpg
.//vision canvas images/026.jpg
.//vision canvas images/027.jpg
.//vision canvas images/028.jpg
.//vision canvas images/029.jpg
.//vision canvas images/030.jpg
`;
return data.split("\n")[index];
}

const frameCount = 25;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page18`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#troff",{
  opacity:0
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#snroff",{
  opacity:0
})

const pageSection = document.querySelector('.page');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const rect = pageSection.getBoundingClientRect();
    if (rect.bottom < 0) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
});


gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})
