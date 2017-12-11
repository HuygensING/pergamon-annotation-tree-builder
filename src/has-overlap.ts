const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end);
export default hasOverlap