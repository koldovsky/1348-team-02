const daysElement = document.getElementById("days");
              const hoursElement = document.getElementById("hours");
              const minutesElement = document.getElementById("minutes");
              const secondsElement = document.getElementById("seconds");

              const targetDate = new Date("2025-03-15T00:00:00Z");

              function updateCountdown() {
                const currentDate = new Date();
                const difference = targetDate - currentDate;

                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                  (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                  (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                daysElement.textContent = days;
                hoursElement.textContent = hours;
                minutesElement.textContent = minutes;
                secondsElement.textContent = seconds;
              }

              updateCountdown();
              setInterval(updateCountdown, 1000);