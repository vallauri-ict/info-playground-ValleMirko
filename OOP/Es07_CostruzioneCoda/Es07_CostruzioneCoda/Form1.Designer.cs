namespace Es07_CostruzioneCoda
{
    partial class Form1
    {
        /// <summary>
        /// Variabile di progettazione necessaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Pulire le risorse in uso.
        /// </summary>
        /// <param name="disposing">ha valore true se le risorse gestite devono essere eliminate, false in caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Codice generato da Progettazione Windows Form

        /// <summary>
        /// Metodo necessario per il supporto della finestra di progettazione. Non modificare
        /// il contenuto del metodo con l'editor di codice.
        /// </summary>
        private void InitializeComponent()
        {
            this.lblEta = new System.Windows.Forms.Label();
            this.lblNome = new System.Windows.Forms.Label();
            this.btnRegistra = new System.Windows.Forms.Button();
            this.btnRicevi = new System.Windows.Forms.Button();
            this.txtEta = new System.Windows.Forms.TextBox();
            this.txtNome = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // lblEta
            // 
            this.lblEta.AutoSize = true;
            this.lblEta.Location = new System.Drawing.Point(12, 38);
            this.lblEta.Name = "lblEta";
            this.lblEta.Size = new System.Drawing.Size(23, 13);
            this.lblEta.TabIndex = 11;
            this.lblEta.Text = "Età";
            // 
            // lblNome
            // 
            this.lblNome.AutoSize = true;
            this.lblNome.Location = new System.Drawing.Point(12, 18);
            this.lblNome.Name = "lblNome";
            this.lblNome.Size = new System.Drawing.Size(35, 13);
            this.lblNome.TabIndex = 10;
            this.lblNome.Text = "Nome";
            // 
            // btnRegistra
            // 
            this.btnRegistra.Location = new System.Drawing.Point(15, 61);
            this.btnRegistra.Name = "btnRegistra";
            this.btnRegistra.Size = new System.Drawing.Size(94, 65);
            this.btnRegistra.TabIndex = 9;
            this.btnRegistra.Text = "REGISTRATI";
            this.btnRegistra.UseVisualStyleBackColor = true;
            this.btnRegistra.Click += new System.EventHandler(this.btnRegistra_Click);
            // 
            // btnRicevi
            // 
            this.btnRicevi.Location = new System.Drawing.Point(135, 61);
            this.btnRicevi.Name = "btnRicevi";
            this.btnRicevi.Size = new System.Drawing.Size(94, 65);
            this.btnRicevi.TabIndex = 8;
            this.btnRicevi.Text = "RICEVI";
            this.btnRicevi.UseVisualStyleBackColor = true;
            this.btnRicevi.Click += new System.EventHandler(this.btnRicevi_Click_1);
            // 
            // txtEta
            // 
            this.txtEta.Location = new System.Drawing.Point(53, 35);
            this.txtEta.Name = "txtEta";
            this.txtEta.Size = new System.Drawing.Size(176, 20);
            this.txtEta.TabIndex = 7;
            // 
            // txtNome
            // 
            this.txtNome.Location = new System.Drawing.Point(53, 12);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(176, 20);
            this.txtNome.TabIndex = 6;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(272, 138);
            this.Controls.Add(this.lblEta);
            this.Controls.Add(this.lblNome);
            this.Controls.Add(this.btnRegistra);
            this.Controls.Add(this.btnRicevi);
            this.Controls.Add(this.txtEta);
            this.Controls.Add(this.txtNome);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblEta;
        private System.Windows.Forms.Label lblNome;
        private System.Windows.Forms.Button btnRegistra;
        private System.Windows.Forms.Button btnRicevi;
        private System.Windows.Forms.TextBox txtEta;
        private System.Windows.Forms.TextBox txtNome;
    }
}

