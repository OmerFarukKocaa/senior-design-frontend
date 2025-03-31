import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-sprint-angular';

  chatInput: string = '';
  chatboxMessages: { message: string; type: 'incoming' | 'outgoing'; timestamp?: string }[] = [];

  faqItems: string[] = [
    "Ders programlarını nereden görüntüleyebilirim?",
    "OBS/EYS’ye nasıl girilir?",
    "Okul kimlik kartımı kaybettim, ne yapabilirim?",
    "Sınav tarihleri nerede ve ne zaman açıklanacak?",
    "Dönem başlangıç ve bitiş tarihleri nedir?"
  ];

  predefinedResponses: { [key: string]: string } = {
    "Ders programlarını nereden görüntüleyebilirim?":
      "OBS’de ders programı görüntüleme ekranından ulaşabilirsiniz.",
    "OBS/EYS’ye nasıl girilir?":
      "Öğrenci Bilgi Sistemi (OBS) giriş bilgileriniz ile Eğitim Yönetim Sistemi (EYS) giriş bilgileriniz aynıdır. Giriş için kullanıcı adınız öğrenci numaranızdır. Sisteme ilk kez giriş yaparken obs.acibadem.edu.tr/oibs/std/login.aspx adresinden şifre sıfırla yaparak yeni bir şifre oluşturabilirsiniz.",
    "Okul kimlik kartımı kaybettim, ne yapabilirim?":
      "Kart Merkezi (A blok) ile iletişime geçin: kartmerkezi@acibadem.edu.tr",
    "Sınav tarihleri nerede ve ne zaman açıklanacak?":
      "Sınav takvimi okulun Öğrenci İşleri > Akademik Takvim bölümünde yayınlanır.",
    "Dönem başlangıç ve bitiş tarihleri nedir?":
      "Dönem başlangıç ve bitiş tarihleri akademik takvimde yer almaktadır."
  };

  getTimestamp(): string {
    const now = new Date();
    return now.toLocaleString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  sendMessage(message: string) {
    if (!message) return;

    this.chatboxMessages.push({
      message: message,
      type: 'outgoing'
    });

    // Simulate typing...
    setTimeout(() => {
      const botMessage = this.predefinedResponses[message] || "İşte Cevabım!";
      this.chatboxMessages.push({
        message: botMessage,
        type: 'incoming',
        timestamp: this.getTimestamp()
      });
    }, 1000);
  }

  handleSendClick() {
    this.sendMessage(this.chatInput.trim());
    this.chatInput = '';
  }

  handleFaqClick(message: string) {
    this.sendMessage(message);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.handleSendClick();
    }
  }
  isDarkMode: boolean = false;
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}