import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pendidikan-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pendidikan-modal.component.html'
})
export class PendidikanModalComponent {
  @Input() visible = false;
  @Input() model: any = {}; // { idPendidikan?, jenjang, jurusan, universitas, tahunMulai, tahunSelesai }
  @Input() idDosen!: number;

  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter<void>();

  saving = false;
  error = '';

  onSave() {
    this.saving = true;
    this.error = '';
    // Emit the model back to parent; parent will call service (keeps component dumb)
    this.saved.emit(this.model);
  }

  onCancel() {
    this.canceled.emit();
  }
}
