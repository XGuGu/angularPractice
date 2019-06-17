function Born() {
  const a1 = 5.0;
  const a2 = 5.5;
  const a3 = 6.0;
  const a4 = 6.5;

  const ev1 = 1.55;
  const ev2 = 1.65;
  const ev3 = 1.75;
  const ev4 = 1.85;

  const target_a = 6.09;
  let upper_a = target_a * (1 + 0.01);
  let lower_a = target_a * (1 - 0.01);

  const target_ev = 1.741
  let upper_ev = target_ev * (1 + 0.01);
  let lower_ev = target_ev + (1 - 0.01);

  let res = [];

  for (let i = 0; i < 1; i += 0.01) {
    for (let j = 0; j < 1; j += 0.01) {
      res.push([p1, p2, temp_a, temp_b])
    }
  }

}

function temp_a(p1, p2, a1, a2, a3, a4) {
  return
}

function temp_ev(p1, p2, ev1, ev2, ev3, ev4) {
  return
}
