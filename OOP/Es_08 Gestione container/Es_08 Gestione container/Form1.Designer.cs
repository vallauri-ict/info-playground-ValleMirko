
namespace Es_08_Gestione_container
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
            this.dgv = new System.Windows.Forms.DataGridView();
            this.Column1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Column3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.btnVisual = new System.Windows.Forms.Button();
            this.btnCaricaStruct = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dgv)).BeginInit();
            this.SuspendLayout();
            // 
            // dgv
            // 
            this.dgv.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgv.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Column1,
            this.Column2,
            this.Column3});
            this.dgv.Location = new System.Drawing.Point(9, 16);
            this.dgv.Name = "dgv";
            this.dgv.ReadOnly = true;
            this.dgv.RowHeadersVisible = false;
            this.dgv.Size = new System.Drawing.Size(303, 218);
            this.dgv.TabIndex = 1;
            this.dgv.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgv_CellContentClick);
            // 
            // Column1
            // 
            this.Column1.HeaderText = "codice";
            this.Column1.Name = "Column1";
            this.Column1.ReadOnly = true;
            // 
            // Column2
            // 
            this.Column2.HeaderText = "peso";
            this.Column2.Name = "Column2";
            this.Column2.ReadOnly = true;
            // 
            // Column3
            // 
            this.Column3.HeaderText = "tara";
            this.Column3.Name = "Column3";
            this.Column3.ReadOnly = true;
            // 
            // btnVisual
            // 
            this.btnVisual.Location = new System.Drawing.Point(9, 236);
            this.btnVisual.Name = "btnVisual";
            this.btnVisual.Size = new System.Drawing.Size(145, 78);
            this.btnVisual.TabIndex = 3;
            this.btnVisual.Text = "visual container";
            this.btnVisual.UseVisualStyleBackColor = true;
            // 
            // btnCaricaStruct
            // 
            this.btnCaricaStruct.Location = new System.Drawing.Point(164, 236);
            this.btnCaricaStruct.Name = "btnCaricaStruct";
            this.btnCaricaStruct.Size = new System.Drawing.Size(152, 78);
            this.btnCaricaStruct.TabIndex = 4;
            this.btnCaricaStruct.Text = "carica container";
            this.btnCaricaStruct.UseVisualStyleBackColor = true;
            this.btnCaricaStruct.Click += new System.EventHandler(this.btnCaricaStruct_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(320, 350);
            this.Controls.Add(this.btnCaricaStruct);
            this.Controls.Add(this.btnVisual);
            this.Controls.Add(this.dgv);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dgv)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dgv;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column1;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column2;
        private System.Windows.Forms.DataGridViewTextBoxColumn Column3;
        private System.Windows.Forms.Button btnVisual;
        private System.Windows.Forms.Button btnCaricaStruct;
    }
}

