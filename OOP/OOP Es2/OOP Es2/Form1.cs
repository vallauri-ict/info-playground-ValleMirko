using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace OOP_Es2
{
    public partial class Form1 : Form
    {
        Persona adele = new Persona();
        public Form1()
        {
            InitializeComponent();
        }

        private void btnVal_Click(object sender, EventArgs e)
        {
            adele.eta = 17;
            MessageBox.Show("Età prima del richiamo al Compleanno: \n" + adele.eta);
            Compleanno(adele);
            MessageBox.Show("Età DOPO del richiamo al Compleanno: \n" + adele.eta);

        }

        private void btnRef_Click(object sender, EventArgs e)
        {
            adele.eta = 54;
            MessageBox.Show("Età prima del richiamo a Supplenza: \n" + adele.eta);
            Supplenza(ref adele);
            MessageBox.Show("Età DOPO del richiamo a Supplenza: \n" + adele.eta);
        }
        private void Compleanno(ref Persona p)
        {
            p.eta++;
        }
        private void Supplenza(ref Persona p)
        {
            p = new Persona();
            p.eta = 27;
        }
    }
}
