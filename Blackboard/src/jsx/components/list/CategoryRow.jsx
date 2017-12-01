// $grid-columns: 12;
// $grid-container-width: 900px;
//
// .container{
//     width: 100%;
//     max-width: $grid-container-width;
//     margin: 0 auto;
//
// .row, &.row{
//     &::before,
//     &::after{
//             content: '';
//             display: block;
//             clear: both;
//         }
//
//         [class*=col-]{
//             //mobile first
//             width: 100%;
//
//
//             //tablet/desktop
//         @media (min-width:720px) {
//                 float: left;
//                 width: 100% / $grid-columns;
//                 min-height: 1px;
//             }
//         }
//
//     @media (min-width: 720px){
//
//         @for $i from 1 through $grid-columns{
//             .col-#{$i}{
//                     width: (100% / $grid-columns) * $i;
//                 }
//             }
//         }
//     }
//
// }