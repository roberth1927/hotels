import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormHomeComponent } from 'src/app/features/hotels/components/form-home/form-home.component';
import Swal from 'sweetalert2';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-form-hotel',
  templateUrl: './form-hotel.component.html',
  styleUrls: ['./form-hotel.component.scss'],
})
export class FormHotelComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<any>();
  ciudades: string[] = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Cartagena',
    'Santa Marta',
    'Pereira',
    'Bucaramanga',
    'Cúcuta',
    'Manizales',
  ];
  @Input() fetching = '';
  @Input() id: number | null = null;
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormHomeComponent>,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!this.form) {
      this.formInit();
    }
  }

  formInit() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      location: ['', Validators.required],
      commission: ['', Validators.required],
      status: ['active', Validators.required],
    });
    Swal.close();
  }

  getForm(): FormGroup {
    return this.form;
  }

  async onSubmit() {
    if (this.form.valid) {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas guardar el registro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        this.formSubmitted.emit(this.form.value);
        Swal.fire('Guardado', 'Registro guardado', 'success');
      } else {
      }
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 0.2);
    } else {
      console.log('Formulario inválido');
    }
  }
  cancel() {
    this.dialogRef.close();
    setTimeout(() => {
      this.cdr.detectChanges();
    });
  }
}
