export const dateFormat = (date) => {
  const dateObj = new Date(date);
  const result = dateObj.toLocaleDateString('th-TH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  return result;
};

// export function TimeComp({ time }) {
//   const [timeer, settimer] = useState('');
//   // timeAgo(new Date(da))
//   useEffect(() => {
//     console.log(time);
//   }, []);
//   const thistime = setInterval(() => {
//     // return settimer(moment().second(Number));
//     return settimer(timeAgo.format(new Date(time), 'round-minute'));
//   }, 6000);
//   console.log(timeer);
//   return (
//     <span>
//       {timeer.split(0, 2) < 15 || timeer.includes('hour') ? 'Timeout' : timeer}
//     </span>
//   );
// }
