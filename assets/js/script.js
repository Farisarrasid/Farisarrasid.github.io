var dataBarang = [{
    nama_barang: "Nama",
    jumlah: "Hari",
    total: 0
  }];
  
  function showBarang() {
    var listBarang = document.getElementById("table");
  
    listBarang.innerHTML = "<tr style='border-collapse:separate; text-align:center; background-color:orange'><th>Nama Mobil</th><th>Jumlah</th><th>Total</th><th>Action</th></tr>";
  
    for (let i = 0; i < dataBarang.length; i++) {
      if (i !== 0) {
        var btnEdit = "<a href='#' class='btn btn-warning' style='margin-right:5px;' onclick='editBarang(" + i + ")'><i class='bi bi-pencil-square'></i></a>";
        var btnHapus = "<a href='#' class='btn btn-danger' onclick='deleteBarang(" + i + ")'><i class='bi bi-trash3'></i></a>";
        listBarang.innerHTML +=
          "<tr><td>" + dataBarang[i].nama_barang + "</td><td style='text-align:center'>" + dataBarang[i].jumlah + "</td><td style='text-align:center'>" + dataBarang[i].total + "</td><td style='text-align:center'>" + btnEdit + btnHapus + "</td></tr>";
      } else {
        // listBarang.innerHTML +=
        // "<th>Data Belum Di Masukan</th>";
      }
    }
  
    const sum = dataBarang.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);
  
    const totalBayar = document.getElementById("total_bayar");
    totalBayar.innerHTML = sum;
  }
  
  function cekTotalHarga(jenisBarang, jumlah) {
    if (jenisBarang == "Beras") {
      const total = jumlah * 10000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Telur") {
      const total = jumlah * 30000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Mie") {
      const total = jumlah * 60000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Minyak") {
      const total = jumlah * 15000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Terigu") {
      const total = jumlah * 15000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Aci") {
      const total = jumlah * 15000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Gula") {
      const total = jumlah * 15000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    } else if (jenisBarang == "Garam") {
      const total = jumlah * 15000;
      return {
        nama_barang: jenisBarang,
        jumlah: jumlah,
        total: total,
      };
    }
  }
  
  function addBarang() {
    var jenisBarang = document.getElementById("jenis_barang").value;
    var jumlah = document.getElementById("jumlah").value;
  
    const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
    dataBarang.push(newDataBarang);
    showBarang();
  }
  
  function editBarang(id) {
    var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
    const detailJenisBarang = dataBarang[id].nama_barang;
  
    const newDataBarang = cekTotalHarga(
      detailJenisBarang,
      newjumlah || dataBarang[id].jumlah
    );
  
    dataBarang[id] = newDataBarang;
    showBarang();
  }
  
  function deleteBarang(id) {
    swal("Apakah anda yakin ?", {
        buttons: {
          cancel: "Batal!",
          catch: {
            text: "Hapus!",
            value: "Delete",
          },
          // defeat: true,
        },
      })
      .then((value) => {
        switch (value) {
  
          case "Cancel":
            swal("Data tidak dihapus");
            break;
  
          case "Delete":
            dataBarang.splice(id, 1);
            showBarang();
            swal("", "Data Berhasil dihapus!", "success");
            break;
  
          default:
            swal("Data Batal dihapus");
        }
      });
    // dataBarang.splice(id, 1);
  
  }
  
  showBarang();
  
  
  function kembalian() {
    const sum = dataBarang.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);
  
    const bayar = parseInt(document.getElementById("pembayaran").value);
    const total = sum;
    const kembalian = bayar - total;
  
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("bayar").innerHTML = bayar;
  
  }
  
  
  
  
  function cetak() {
    // var listBarang = document.getElementById("table");
  
    // listBarang.innerHTML = "<tr> <th>Nama</th><th>Jumlah</th> <td></td> <th>Total</th></tr>";
  
    // for (let i = 0; i < dataBarang.length; i++) {
    //   if (i !== 0) {
    //     listBarang.innerHTML +=
    //       "<tr><td>"+ dataBarang[i].nama_barang +"</td><td>"+ dataBarang[i].jumlah +"</td><td>"+ dataBarang[i].total  +"</td></tr>";
    //   } else {
    //     // listBarang.innerHTML +=
    //     // "<th>Data Belum Di Masukan</th>";
    //   }
    // }
  
    // const sum = dataBarang.reduce((accumulator, object) => {
    //   return accumulator + object.total;
    // }, 0);
  
    // const totalBayar = document.getElementById("total_bayar");
    // totalBayar.innerHTML = sum;
  
    // const bayar = parseInt(document.getElementById("pembayaran").value) ;
    // const total = sum ;
    // const kembalian = bayar - total ;
    window.print();
  
  }