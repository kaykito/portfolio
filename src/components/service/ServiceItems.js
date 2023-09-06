import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Web Design",
    text: [
      "Penentuan Tujuan dan Target Audiens: Tentukan tujuan Anda untuk situs portofolio ini. Apakah Anda ingin menarik klien baru, menunjukkan keterampilan teknis Anda, atau mengekspresikan gaya desain Anda? Pastikan Anda juga memahami siapa yang akan menjadi target audiens situs Anda, seperti calon klien, rekruiter, atau rekan-rekan desainer",
      "Pemilihan Gaya Desain: Pilih gaya desain yang mencerminkan identitas dan estetika Anda. Apakah Anda suka desain minimalis, berwarna-warni, atau lebih kreatif dan eksperimental? Gaya desain ini akan mempengaruhi tata letak, warna, tipografi, dan elemen-elemen visual lainnya",
      "Struktur Tata Letak: Rencanakan struktur tata letak situs Anda. Pikirkan tentang bagaimana Anda ingin mengatur bagian-bagian yang telah disebutkan sebelumnya, seperti beranda, portofolio, layanan, testimoni, dan kontak. Pastikan tata letaknya mudah dinavigasi dan intuitif",
      "Warna dan Tipografi: Pilih palet warna yang sesuai dengan identitas merek Anda. Pertimbangkan warna latar belakang, warna teks, dan warna aksen. Selain itu, pilih jenis huruf yang mudah dibaca dan sesuai dengan gaya desain Anda",
      "Konten Visual: Kualitas gambar sangat penting dalam portofolio web design. Pastikan gambar-gambar proyek Anda ditampilkan dengan resolusi tinggi dan dalam format yang mendukung kualitas gambar yang baik. Anda juga bisa menggunakan mockup untuk menampilkan desain web dalam konteks nyata",
      "Responsivitas: Pastikan bahwa desain situs Anda responsif, artinya tampil dengan baik di berbagai perangkat seperti desktop, tablet, dan ponsel. Hal ini penting untuk memberikan pengalaman yang baik kepada pengunjung dari berbagai platform",
      "Animasi dan Interaktivitas: Jika sesuai dengan gaya desain Anda, pertimbangkan penggunaan animasi atau elemen interaktif yang menambahkan ketertarikan visual. Tetapi, pastikan penggunaan animasi tidak mengganggu navigasi atau memperlambat waktu muat situs",
      "Uji Coba dan Pengoptimalan: Sebelum meluncurkan situs Anda, uji coba di berbagai perangkat dan browser untuk memastikan semuanya berjalan dengan baik. Perhatikan juga waktu muat situs agar tidak terlalu lama, karena kecepatan situs mempengaruhi pengalaman pengunjung",
      "Pengaturan Domain dan Hosting: Daftarkan domain yang sesuai dengan nama Anda atau merek Anda. Pilih penyedia hosting yang andal untuk menjaga situs tetap online dan berjalan lancar",
      "Promosi dan Pengembangan Lanjutan: Setelah situs Anda diluncurkan, promosikan melalui media sosial, portofolio online lainnya, dan jaringan profesional Anda. Selanjutnya, pertimbangkan untuk terus mengembangkan dan memperbarui situs dengan proyek-proyek terbaru dan perubahan desain",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    name: "Content Writing",
    text: [
      "Deskripsi Singkat: Mulailah dengan deskripsi singkat yang merangkum apa yang Anda tawarkan dalam bidang content writing. Jelaskan keterampilan dan keahlian khusus yang Anda miliki, seperti penulisan artikel, konten web, copywriting, penulisan kreatif, dan lainnya",
      "Portofolio Artikel: Tampilkan contoh-contoh artikel yang Anda tulis. Ini bisa berupa berbagai jenis artikel seperti blog, artikel informatif, opini, atau artikel berita. Sertakan judul, deskripsi singkat, dan tautan ke artikel tersebut jika memungkinkan",
      "Jenis Konten yang Dapat Dicover: Jelaskan jenis konten yang dapat Anda tulis. Ini bisa termasuk artikel blog, konten web, posting media sosial, materi pemasaran, skrip video, panduan, dan banyak lagi. Ini akan memberikan gambaran kepada klien atau perekrut tentang bidang di mana Anda memiliki keahlian",
      "Niche atau Industri: Jika Anda memiliki pengalaman menulis dalam niche atau industri tertentu (misalnya, teknologi, kesehatan, wisata, atau fashion), sebutkan ini. Pengalaman menulis dalam niche tertentu dapat menjadi nilai tambah yang signifikan",
      "Testimoni Klien: Jika Anda telah mengerjakan proyek untuk klien sebelumnya, sertakan kutipan dari testimoni mereka yang menunjukkan kepuasan mereka dengan layanan Anda. Testimoni ini akan memberikan bukti kualitas pekerjaan Anda",
      "Proyek Khusus: Jika Anda pernah mengerjakan proyek konten khusus seperti merancang kampanye pemasaran melalui konten, merancang narasi merek, atau menulis skrip video, sebutkan proyek-proyek ini secara khusus",
      "Kemampuan SEO: Jelaskan apakah Anda memiliki pengetahuan tentang optimasi mesin pencari (SEO) dan bagaimana Anda mengintegrasikannya dalam tulisan Anda untuk meningkatkan visibilitas online",
      "Gaya Penulisan: Ceritakan tentang gaya penulisan Anda. Apakah Anda cenderung menulis dengan gaya informatif, cerdas, santai, atau formal? Hal ini akan membantu klien memahami bagaimana Anda dapat mencocokkan gaya mereka",
      "Portofolio di Platform Lain: Jika Anda memiliki profil di platform seperti Medium, LinkedIn, atau blog pribadi, sebutkan ini dan tautkan ke profil Anda. Ini akan membantu calon klien atau perekrut melihat karya Anda dengan lebih mendalam",
      "Tentang Proses Kerja: Jelaskan secara singkat bagaimana Anda biasanya berkolaborasi dengan klien atau tim. Ini bisa mencakup bagaimana Anda mengumpulkan informasi, mengembangkan konsep, melakukan penelitian, dan menyelesaikan tulisan",
      "Tautan ke Artikel Terpopuler: Jika Anda memiliki artikel yang telah mendapatkan perhatian besar atau populer di media sosial, sebutkan ini dan tautkan ke artikel-artikel tersebut",
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Manage Server",
    text: [
      "Deskripsi Kemampuan Server Management: Mulailah dengan deskripsi yang jelas tentang kemampuan Anda dalam mengelola server. Jelaskan pengalaman Anda dalam mengelola infrastruktur teknologi, konfigurasi server, pemeliharaan, keamanan, dan skalabilitas",
      "Jenis Server yang Anda Kelola: Jelaskan jenis server yang telah Anda kelola, seperti server web (Apache, Nginx), server database (MySQL, PostgreSQL), server aplikasi (Tomcat, Node.js), atau server cloud (AWS, Azure, Google Cloud)",
      "Pengaturan Server: Jelaskan bagaimana Anda mengatur dan mengkonfigurasi server. Ini termasuk pengaturan sistem operasi, instalasi perangkat lunak, konfigurasi jaringan, dan optimalisasi kinerja",
      "Keamanan Server: Gambarkan bagaimana Anda mengelola keamanan server. Ini meliputi langkah-langkah seperti penerapan firewall, pembaruan perangkat lunak, penerapan sertifikat SSL, dan pengawasan terhadap aktivitas mencurigakan",
      "Pemantauan dan Pemeliharaan: Ceritakan tentang bagaimana Anda melakukan pemantauan server secara berkala untuk memastikan kinerjanya optimal. Ini meliputi pemantauan penggunaan sumber daya, pembaruan sistem, dan manajemen ruang disk",
      "Penanganan Masalah Darurat: Ceritakan tentang pengalaman Anda dalam menangani masalah darurat server, seperti kegagalan sistem, downtime, atau serangan siber. Jelaskan bagaimana Anda mengatasi masalah ini dan mengembalikan server ke kondisi berfungsi",
      "Konfigurasi Server Lanjutan: Jika Anda memiliki pengalaman dengan konfigurasi server yang lebih lanjut, seperti penyesuaian kinerja, konfigurasi tingkat aplikasi, atau penanganan distribusi beban, jelaskan ini",
      "Penerapan Automasi: Jika Anda menggunakan alat otomatisasi seperti Ansible, Puppet, atau Docker untuk mengelola server, jelaskan bagaimana Anda menggunakannya untuk meningkatkan efisiensi dan konsistensi",
      "Penggunaan Cloud Services: Jika Anda terlibat dalam manajemen server cloud, seperti AWS, Azure, atau Google Cloud, jelaskan pengalaman Anda dalam mengatur dan mengelola infrastruktur cloud",
      "Sertifikasi dan Pelatihan: Jika Anda memiliki sertifikasi atau pelatihan yang relevan, seperti sertifikasi AWS atau CompTIA Server+, sertakan ini dalam bagian portofolio Anda",
      "Studi Kasus: Sertakan studi kasus singkat tentang proyek server yang menantang dan bagaimana Anda berhasil mengelolanya. Ini akan memberikan bukti konkret tentang kemampuan Anda dalam mengatasi tantangan teknis",
      "Tautan ke Proyek Terkait: Jika Anda memiliki proyek konkret yang dapat ditampilkan, sertakan tautan ke proyek-proyek tersebut atau sediakan tangkapan layar yang relevan",
      "Keterampilan Lainnya: Jika Anda memiliki keterampilan terkait seperti administrasi jaringan, keamanan siber, atau manajemen sistem, sebutkan ini dan berikan gambaran tentang bagaimana keterampilan ini melengkapi kemampuan server management Anda" ,
    ],
    image: "assets/img/news/3.jpg",
  },
  {
    id: 4,
    name: "Networking",
    text: [
      "Deskripsi Kemampuan Networking: Mulailah dengan deskripsi singkat tentang kemampuan Anda dalam bidang jaringan. Jelaskan keterampilan Anda dalam merancang, mengkonfigurasi, mengelola, dan memelihara infrastruktur jaringan",
      "Jenis Jaringan yang Anda Kelola: Jelaskan jenis-jenis jaringan yang telah Anda kelola, seperti jaringan lokal (LAN), jaringan luas (WAN), jaringan nirkabel (Wi-Fi), dan jaringan cloud.",
      "Pengaturan Jaringan: Gambarkan bagaimana Anda mengatur dan mengkonfigurasi jaringan. Ini meliputi pemilihan perangkat keras (router, switch), pengaturan alamat IP, subnetting, dan pengaturan DNS.",
      "Keamanan Jaringan: Ceritakan tentang pengalaman Anda dalam mengelola keamanan jaringan. Ini termasuk penerapan firewall, pemantauan lalu lintas jaringan, deteksi intrusi, dan implementasi protokol keamanan seperti VPN",
      "Pengaturan Jaringan Nirkabel: Jika Anda memiliki pengalaman dalam mengatur jaringan nirkabel, jelaskan bagaimana Anda mengkonfigurasi akses poin, mengamankan jaringan Wi-Fi, dan memastikan kinerja yang baik.",
      "Pemantauan Jaringan: Gambarkan bagaimana Anda melakukan pemantauan kesehatan jaringan secara berkala. Ini melibatkan pemantauan lalu lintas, penggunaan sumber daya, dan identifikasi potensi masalah.",
      "Troubleshooting Jaringan: Jelaskan pengalaman Anda dalam menemukan dan memperbaiki masalah jaringan. Ini bisa termasuk masalah konektivitas, kecepatan rendah, atau masalah koneksi.",
      "Implementasi Teknologi Cloud: Jika Anda memiliki pengalaman dengan jaringan cloud seperti AWS, Azure, atau Google Cloud, jelaskan bagaimana Anda mengintegrasikan teknologi ini dalam infrastruktur jaringan.",
      "Konfigurasi VPN: Jika Anda memiliki pengalaman dalam mengatur Virtual Private Network (VPN), jelaskan bagaimana Anda mengonfigurasi dan mengelola layanan VPN untuk mengamankan komunikasi jaringan.",
      "Sertifikasi dan Pelatihan: Jika Anda memiliki sertifikasi seperti Cisco CCNA, CompTIA Network+, atau sertifikasi lain yang relevan, sertakan ini dalam portofolio Anda.",
      "Studi Kasus: Sertakan contoh studi kasus tentang proyek jaringan yang kompleks dan bagaimana Anda berhasil merancang dan mengelolanya.",
      "Penggunaan Alat dan Perangkat Lunak: Jelaskan alat-alat dan perangkat lunak yang Anda gunakan untuk membantu mengelola jaringan, seperti alat pemantauan jaringan atau alat simulasi jaringan.",
      "Proyek Terkait: Tampilkan proyek-proyek spesifik yang terkait dengan jaringan, seperti peningkatan infrastruktur jaringan, migrasi jaringan, atau peningkatan keamanan jaringan ",
    ],
    image: "assets/img/news/4.jpg",
  },
  {
    id: 5,
    name: "Web App",
    text: [
      "Konsep dan Tujuan Aplikasi: Tentukan konsep dan tujuan dari aplikasi web yang ingin Anda tampilkan dalam portofolio. Apakah ini merupakan proyek pribadi, klien, atau projek akademis? Jelaskan masalah yang ingin Anda selesaikan dengan aplikasi tersebut.",
      "Desain Antarmuka Pengguna (UI): Rancang antarmuka pengguna (UI) dengan mempertimbangkan estetika, tata letak, warna, dan elemen visual lainnya. Pastikan UI mudah dinavigasi, intuitif, dan sesuai dengan tujuan aplikasi.",
      "Rancangan Tata Letak (Wireframe): Buat tata letak dasar dalam bentuk wireframe. Ini adalah sketsa kasar yang menunjukkan posisi elemen-elemen utama di halaman. Wireframe membantu Anda merencanakan tata letak sebelum masuk ke desain detail.",
      "Pemilihan Teknologi: Pilih teknologi yang tepat untuk mengembangkan aplikasi web Anda. Ini bisa meliputi bahasa pemrograman (seperti HTML, CSS, JavaScript), kerangka kerja (seperti React, Angular, atau Vue), dan backend (seperti Node.js, Django, atau Ruby on Rails).",
      "Pengembangan Frontend: Mulailah mengembangkan frontend aplikasi web Anda. Buat tampilan yang sesuai dengan desain yang telah Anda rencanakan. Pastikan tampilan responsif agar aplikasi terlihat baik di berbagai perangkat.",
      "Pengembangan Backend: Jika aplikasi Anda memerlukan interaksi dengan basis data atau logika bisnis yang lebih kompleks, kembangkan backend aplikasi Anda. Ini mungkin melibatkan pembuatan API atau pengaturan server.",
      "Fungsionalitas Utama: Implementasikan fitur-fitur utama yang Anda rencanakan untuk aplikasi. Pastikan setiap fitur berfungsi dengan baik dan sesuai dengan tujuan aplikasi.",
      "Uji dan Debugging: Lakukan pengujian menyeluruh terhadap aplikasi Anda. Periksa kemungkinan bug, masalah tampilan, atau masalah fungsionalitas. Uji aplikasi di berbagai browser dan perangkat.",
      "Optimalisasi Kinerja: Pastikan aplikasi Anda memiliki waktu muat yang cepat dan berkinerja baik. Optimalisasi gambar, kode, dan penggunaan sumber daya lainnya untuk memastikan pengalaman pengguna yang baik.",
      "Dokumentasi: Buat dokumentasi yang jelas tentang cara menggunakan aplikasi, fitur-fitur yang tersedia, dan bagaimana aplikasi berinteraksi dengan pengguna.",
      "Hosting dan Peluncuran: Pilih penyedia hosting yang sesuai dengan teknologi yang Anda gunakan. Pasang aplikasi Anda di server dan pastikan semuanya berjalan dengan baik sebelum peluncuran.",
      "Pembaruan dan Pengembangan Lanjutan: Setelah aplikasi diluncurkan, terus pantau kinerja dan tanggapan pengguna. Perbarui aplikasi sesuai dengan umpan balik dan kebutuhan baru.",
      "Penyajian dalam Portofolio: Tampilkan aplikasi web dalam portofolio Anda dengan menambahkan tangkapan layar, deskripsi fungsionalitas, dan tautan langsung ke aplikasi (jika mungkin).",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 6,
    name: "Mobile App",
    text: [
      "Deskripsi Kemampuan Pengembangan Aplikasi Mobile: Mulailah dengan deskripsi singkat tentang kemampuan Anda dalam mengembangkan aplikasi mobile. Jelaskan bahwa Anda memiliki pengalaman dalam merancang, mengembangkan, dan merilis aplikasi untuk platform mobile.",
      "Platform Mobile yang Anda Kuasai: Jelaskan platform mobile yang Anda kuasai, seperti iOS (Apple) atau Android (Google). Jika Anda memiliki pengalaman di kedua platform, sebutkan ini juga.",
      "Bahasa Pemrograman dan Kerangka Kerja: Jelaskan bahasa pemrograman yang Anda gunakan dalam pengembangan aplikasi mobile, seperti Swift (iOS), Kotlin (Android), atau React Native (cross-platform). Juga, sebutkan kerangka kerja (framework) yang Anda kuasai.",
      "Pengalaman UI/UX: Ceritakan tentang pengalaman Anda dalam merancang antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk aplikasi mobile. Jelaskan bagaimana Anda memastikan aplikasi memiliki tampilan yang menarik dan fungsional.",
      "Pengembangan Aplikasi Nativ atau Cross-Platform: Jelaskan apakah Anda fokus pada pengembangan aplikasi native (menggunakan bahasa dan kerangka kerja spesifik platform) atau cross-platform (menggunakan kerangka kerja yang memungkinkan pengembangan untuk berbagai platform).",
      "Proyek Aplikasi Terkait: Tampilkan contoh-contoh aplikasi mobile yang telah Anda kembangkan. Sertakan tangkapan layar, deskripsi fungsionalitas, dan tautan ke aplikasi (jika memungkinkan).",
      "Penggunaan Alat Pengembangan: Sebutkan alat-alat dan perangkat lunak yang Anda gunakan dalam pengembangan aplikasi, seperti Android Studio, Xcode, Visual Studio Code, atau alat pengujian aplikasi.",
      "Integrasi Layanan Pihak Ketiga: Jika Anda memiliki pengalaman dalam mengintegrasikan layanan pihak ketiga seperti pembayaran, peta, atau media sosial ke dalam aplikasi, jelaskan ini.",
      "Optimalisasi Kinerja: Gambarkan bagaimana Anda memastikan kinerja yang baik dan waktu muat yang cepat dalam pengembangan aplikasi. Ini meliputi optimasi kode, manajemen memori, dan penggunaan sumber daya yang efisien.",
      "Pembaruan dan Pemeliharaan Aplikasi: Jelaskan bagaimana Anda mengelola pembaruan dan pemeliharaan aplikasi setelah peluncuran. Ini meliputi penambahan fitur, perbaikan bug, dan pembaruan kompatibilitas.",
      "Portofolio di Platform App Store: Jika aplikasi Anda telah dirilis di toko aplikasi seperti App Store (iOS) atau Google Play Store (Android), sertakan tautan atau tangkapan layar dari halaman aplikasi di toko tersebut.",
      "Pelatihan dan Sertifikasi: Jika Anda telah mengikuti pelatihan atau memiliki sertifikasi terkait pengembangan aplikasi mobile, sebutkan ini dalam bagian portofolio Anda.",
    ],
    image: "assets/img/news/2.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
