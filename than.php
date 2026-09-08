<?php 
echo PHP_EOL;
    $harga_barang = 15000;
    $jumlah_beli = 3;
    $total = $harga_barang * $jumlah_beli;

    echo "Total Harga untuk " . $jumlah_beli . " barang adalah Rp. " . $total;
    echo "<br>";

    $nama = "Budi";
    $tahun_lahir = 2011;
    $tahun_sekarang = 2026;
    $umur = $tahun_sekarang - $tahun_lahir;
    
    echo "Halo " . $nama . ", umur kamu adalah " . $umur . " tahun.<br>";

    $angka = 7;
     if ($angka % 2 == 0) {
        echo "Angka " . $angka . " adalah bilangan genap. ";
    } else {
        echo "Angka " . $angka . " adalah bilangan ganjil. ";
    }
    echo "<br>";
    $angka = 12;
    if ($angka % 2 == 0) {
        echo "Angka " . $angka . " adalah bilangan genap. ";
    } else {
        echo "Angka " . $angka . " adalah bilangan ganjil. ";
    }
    // Copyright © 2026 by Sulthan.
?>