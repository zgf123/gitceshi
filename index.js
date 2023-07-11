const ot = {
  work() {
    this.job();
  },
};

const o1 = {
  job() {
    console.log("o1 在工作");
  },
};

const o2 = {
  job() {
    console.log("o2 在工作");
  },
};

// ot.work.call(o1);

function f0() {
  console.log(1);
  this();
  console.log(2);
}

function f1() {
  console.log("f1 在工作");
}

function f2() {
  console.log("f2 在工作");
}

f0.call(f2);
