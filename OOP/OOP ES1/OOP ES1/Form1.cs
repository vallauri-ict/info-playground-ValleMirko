using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace OOP_ES1
{
    public partial class Form1 : Form
    {
            Rectable r;
            Rectable s = new Rectable();
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void btnCrea_Click(object sender, EventArgs e)
        {
            r = new Rectable();
            r.side1 = Convert.ToInt32(txtBase.Text);
            r.side2 = Convert.ToInt32(txtAltezza.Text);
            MessageBox.Show("Oggetti r -> Lati" + r.side1 + " - " + r.side2);

            s.side1 = Convert.ToInt32(txtBase.Text);
            s.side2 = Convert.ToInt32(txtAltezza.Text);
            MessageBox.Show("Oggetti s -> Lati" + s.side1 + " - " + s.side2);

            Rectable t;
            t = r;

            MessageBox.Show("Oggetti t -> Lati" + t.side1 + " - " + t.side2);
        }
    }
}
