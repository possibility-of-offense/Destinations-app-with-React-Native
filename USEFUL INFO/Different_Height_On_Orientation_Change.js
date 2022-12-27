const dimensions = Dimensions.get("screen");
const [heightSize, setHeightSize] = useState(0);

useEffect(() => {
  const subs = Dimensions.addEventListener("change", (e) => {
    if (e.screen.width > e.screen.height) {
      setHeightSize(110);
    } else {
      setHeightSize(80);
    }
  });

  return () => subs?.remove();
}, [heightSize]);
