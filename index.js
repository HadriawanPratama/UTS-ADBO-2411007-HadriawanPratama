// ===============================
// Parent Class: Cuti
// ===============================
class Cuti {
  constructor(namaKaryawan, kuota) {
    this.namaKaryawan = namaKaryawan;
    this.kuota = kuota;
  }

  ajukan(hari) {
    return "Pengajuan cuti belum ditentukan jenisnya.";
  }

  cekKuota(hari) {
    return this.kuota >= hari;
  }
}



// ===============================
// Child Class: Cuti Tahunan
// ===============================
class CutiTahunan extends Cuti {
  constructor(namaKaryawan, kuota = 12) {
    super(namaKaryawan, kuota); 
  }

  ajukan(hari) {
    if (!this.cekKuota(hari)) {
      return "Kuota anda tidak cukup untuk mengajukan cuti tahunan.";
    }
    this.kuota -= hari;
    return `${this.namaKaryawan} mengajukan ${hari} hari cuti tahunan. Sisa kuota: ${this.kuota}`;
  }
}



// ===============================
// Child Class: Cuti Sakit
// ===============================
class CutiSakit extends Cuti {
  constructor(namaKaryawan, kuota = 2) {
    super(namaKaryawan, kuota);
  }

  ajukan(hari) {
    if (!this.cekKuota(hari)) {
      return "Kuota anda tidak cukup untuk mengajukan cuti sakit.";
    }
    this.kuota -= hari;
    return `${this.namaKaryawan} mengajukan ${hari} hari cuti sakit. Sisa kuota: ${this.kuota}`;
  }
}



// ===============================
// Child Class: Cuti Melahirkan
// ===============================
class CutiMelahirkan extends Cuti {
  constructor(namaKaryawan, kuota = 90) {
    super(namaKaryawan, kuota);
  }

  ajukan(hari) {
    if (!this.cekKuota(hari)) {
      return "Kuota anda tidak cukup untuk mengajukan cuti melahirkan.";
    }
    this.kuota -= hari;
    return `${this.namaKaryawan} mengajukan ${hari} hari cuti melahirkan. Sisa kuota: ${this.kuota}`;
  }
}



// ===============================
// Contoh Penggunaan
// ===============================

const karyawan1 = new CutiTahunan("Hadriawan");
const karyawan2 = new CutiSakit("Lukman");
const karyawan3 = new CutiMelahirkan("Ival");


console.log(karyawan1.ajukan(11));
console.log(karyawan1.ajukan(2));

console.log(karyawan2.ajukan(1));
console.log(karyawan2.ajukan(2));

console.log(karyawan3.ajukan(88));
console.log(karyawan3.ajukan(33));

