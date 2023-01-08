const scrollToBottom = (ref) => {
  setTimeout(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 100);
}

export default scrollToBottom
