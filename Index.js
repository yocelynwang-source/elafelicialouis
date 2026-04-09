function daftar() {
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;

    if (nama === "") nama = "(Belum diisi)";
    if (kelas === "") kelas = "(Belum diisi)";

    let ekstra = document.getElementsByName("ekstra");
    let hasilEkstra = [];

    for (let i = 0; i < ekstra.length; i++) {
        if (ekstra[i].checked) {
            hasilEkstra.push(ekstra[i].value);
        }
    }

    if (hasilEkstra.length === 0) {
        hasilEkstra.push("(Belum dipilih)");
    }

    let jadwal = document.getElementsByName("jadwal");
    let hasilJadwal = "";

    for (let i = 0; i < jadwal.length; i++) {
        if (jadwal[i].checked) {
            hasilJadwal = jadwal[i].value;
        }
    }

    if (hasilJadwal === "") {
        hasilJadwal = "(Belum dipilih)";
    }

    document.getElementById("hasil").innerText =
        "Nama: " + nama +
        "\nKelas: " + kelas +
        "\nEkstrakurikuler: " + hasilEkstra.join(", ") +
        "\nJadwal: " + hasilJadwal;
}

function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("kelas").value = "";

    let semua = document.querySelectorAll("input");
    semua.forEach(function(el) {
        if (el.type === "checkbox" || el.type === "radio") {
            el.checked = false;
        }
    });

    document.getElementById("hasil").innerText = "Data akan muncul di sini...";
}
		