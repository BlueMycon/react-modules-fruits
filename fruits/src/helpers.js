function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  const index = items.indexOf(item);
  const popped = items.splice(index, 1).length;
  if (popped.length !== 0) return popped;
  return undefined;
}

export { choice, remove };
