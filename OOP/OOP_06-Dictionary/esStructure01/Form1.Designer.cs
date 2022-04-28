namespace esStructure01
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
            this.btnNIns = new System.Windows.Forms.Button();
            this.btnCercaChiave = new System.Windows.Forms.Button();
            this.dgv = new System.Windows.Forms.DataGridView();
            this.Column1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.nUD = new System.Windows.Forms.NumericUpDown();
            this.label1 = new System.Windows.Forms.Label();
            this.btnAdd = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dgv)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.nUD)).BeginInit();
            this.SuspendLayout();
            // 
            // btnNIns
            // 
            this.btnNIns.Location = new System.Drawing.Point(6, 268);
            this.btnNIns.Margin = new System.Windows.Forms.Padding(2);
            this.btnNIns.Name = "btnNIns";
            this.btnNIns.Size = new System.Drawing.Size(164, 71);
            this.btnNIns.TabIndex = 0;
            this.btnNIns.Text = "Num.Inserimenti";
            this.btnNIns.UseVisualStyleBackColor = true;
            this.btnNIns.Click += new System.EventHandler(this.btnNIns_Click);
            // 
            // btnCercaChiave
            // 
            this.btnCercaChiave.Location = new System.Drawing.Point(174, 269);
            this.btnCercaChiave.Margin = new System.Windows.Forms.Padding(2);
            this.btnCercaChiave.Name = "btnCercaChiave";
            this.btnCercaChiave.Size = new System.Drawing.Size(198, 71);
            this.btnCercaChiave.TabIndex = 1;
            this.btnCercaChiave.Text = "Ricerca Tramite Chiave";
            this.btnCercaChiave.UseVisualStyleBackColor = true;
            this.btnCercaChiave.Click += new System.EventHandler(this.btnCercaChiave_Click);
            // 
            // dgv
            // 
            this.dgv.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgv.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column1,
            this.Column2});
            this.dgv.Location = new System.Drawing.Point(6, 6);
            this.dgv.Margin = new System.Windows.Forms.Padding(2);
            this.dgv.Name = "dgv";
            this.dgv.RowHeadersVisible = false;
            this.dgv.RowTemplate.Height = 33;
            this.dgv.Size = new System.Drawing.Size(207, 258);
            this.dgv.TabIndex = 2;
            // 
            // Column1
            // 
            this.Column1.HeaderText = "Key";
            this.Column1.Name = "Column1";
            this.Column1.ReadOnly = true;
            // 
            // Column2
            // 
            this.Column2.HeaderText = "Value";
            this.Column2.Name = "Column2";
            this.Column2.ReadOnly = true;
            // 
            // nUD
            // 
            this.nUD.Location = new System.Drawing.Point(217, 6);
            this.nUD.Margin = new System.Windows.Forms.Padding(2);
            this.nUD.Name = "nUD";
            this.nUD.ReadOnly = true;
            this.nUD.Size = new System.Drawing.Size(60, 20);
            this.nUD.TabIndex = 3;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(281, 9);
            this.label1.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(91, 13);
            this.label1.TabIndex = 4;
            this.label1.Text = "numero di prodotti";
            // 
            // btnAdd
            // 
            this.btnAdd.Location = new System.Drawing.Point(222, 193);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(150, 71);
            this.btnAdd.TabIndex = 5;
            this.btnAdd.Text = "Aggiungi Articolo";
            this.btnAdd.UseVisualStyleBackColor = true;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.ClientSize = new System.Drawing.Size(376, 346);
            this.Controls.Add(this.btnAdd);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.nUD);
            this.Controls.Add(this.dgv);
            this.Controls.Add(this.btnCercaChiave);
            this.Controls.Add(this.btnNIns);
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dgv)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.nUD)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnNIns;
        private System.Windows.Forms.Button btnCercaChiave;
        private System.Windows.Forms.DataGridView dgv;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column1;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column2;
        private System.Windows.Forms.NumericUpDown nUD;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnAdd;
    }
}

