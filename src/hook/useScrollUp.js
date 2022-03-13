import { ref, watch } from "vue";
export function useScrollUp() {
  const scrolledUp = ref(false);
  const startValue = ref(0);
  const moveValue = ref(0);

  function detectStart(e) {
    startValue.value = e.changedTouches[0].clientY;
  }
  function detectMove(e) {
    moveValue.value = e.changedTouches[0].clientY;
  }

  watch(moveValue, () => {
    if (startValue.value - moveValue.value >= 100 && scrolledUp.value === false) {
      scrolledUp.value = true;
    }
    if (startValue.value - moveValue.value <= -100 && scrolledUp.value === true) {
      scrolledUp.value = false;
    }
  });


  return { scrolledUp, detectMove, detectStart };
}