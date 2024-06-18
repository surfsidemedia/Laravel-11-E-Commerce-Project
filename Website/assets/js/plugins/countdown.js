
const countdown = function(_config) {
  const tarDate = _config.target.dataset.date.split('-');
  const day = parseInt(tarDate[0]);
  const month = parseInt(tarDate[1]);
  const year = parseInt(tarDate[2]);
  let tarTime = _config.target.dataset.time;
  let tarhour, tarmin;

  const $day = _config.target.querySelector('.day .countdown-num')
  const $hour = _config.target.querySelector('.hour .countdown-num')
  const $min = _config.target.querySelector('.min .countdown-num')
  const $sec = _config.target.querySelector('.sec .countdown-num')

  if (tarTime != null) {
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }

  // Set the date we're counting down to
  const countDownDate = new Date(year, month-1, day, tarhour, tarmin, 0, 0).getTime();

  const updateTime = () => {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    requestAnimationFrame(updateTime);

    if ($day) $day.innerHTML = addZero(days);
    if ($hour) $hour.innerHTML = addZero(hours);
    if ($min) $min.innerHTML = addZero(minutes);
    if ($sec) $sec.innerHTML = addZero(seconds);

    // If the count down is over, write some text
    if (distance < 0) {
      _config.target.innerHTML = "";
    }
  }

  updateTime();
}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;
