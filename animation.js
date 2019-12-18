AOS.init({
    duration: 1200,
});






// let last_known_scroll_position = 0;
// let ticking = false;
// let previous_scroll_position = 1;
// let section_in_view = 1;
// let max_section = 3;
// // om vi står på 1 och scrollar upp, stanna på 1 annars gå till 2


// function scrollTo (el) {
// el.scrollIntoView({
//     behavior: 'smooth', // smooth scroll
//     block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
//   })
// }

// function doSomething(scroll_pos) {
//     console.log("doSomething rann")
//     if (previous_scroll_position < scroll_pos) {
//         //console.log("scroll down detected")
//         // we scroll down
//         if (section_in_view < max_section) {
//             section_in_view++;
//             let section = document.getElementById("section-" + section_in_view);
//             //console.log(section);
//             scrollTo(section);
//         }
//         previous_scroll_position = scroll_pos;

//   // Do something with the scroll position
// }
// }
// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
//     console.log(last_known_scroll_position)
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });